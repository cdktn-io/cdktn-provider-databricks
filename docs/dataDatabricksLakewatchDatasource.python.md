# `dataDatabricksLakewatchDatasource` Submodule <a name="`dataDatabricksLakewatchDatasource` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasource <a name="DataDatabricksLakewatchDatasource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource(
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
  provider_config: DataDatabricksLakewatchDatasourceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchDatasource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode">compute_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId">compute_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId">datasource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName">datasource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName">effective_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName">effective_datasource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal">effective_run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName">effective_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable">existing_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection">unity_catalog_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.autoloader"></a>

```python
autoloader: DataDatabricksLakewatchDatasourceAutoloaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference">DataDatabricksLakewatchDatasourceAutoloaderOutputReference</a>

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `compute_mode`<sup>Required</sup> <a name="compute_mode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeMode"></a>

```python
compute_mode: str
```

- *Type:* str

---

##### `compute_workspace_id`<sup>Required</sup> <a name="compute_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.computeWorkspaceId"></a>

```python
compute_workspace_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createdBy"></a>

```python
created_by: DataDatabricksLakewatchDatasourceCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference">DataDatabricksLakewatchDatasourceCreatedByOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `datasource_id`<sup>Required</sup> <a name="datasource_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceId"></a>

```python
datasource_id: str
```

- *Type:* str

---

##### `datasource_name`<sup>Required</sup> <a name="datasource_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.datasourceName"></a>

```python
datasource_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_catalog_name`<sup>Required</sup> <a name="effective_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveCatalogName"></a>

```python
effective_catalog_name: str
```

- *Type:* str

---

##### `effective_datasource_name`<sup>Required</sup> <a name="effective_datasource_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveDatasourceName"></a>

```python
effective_datasource_name: str
```

- *Type:* str

---

##### `effective_run_as_principal`<sup>Required</sup> <a name="effective_run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```python
effective_run_as_principal: str
```

- *Type:* str

---

##### `effective_schema_name`<sup>Required</sup> <a name="effective_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.effectiveSchemaName"></a>

```python
effective_schema_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `existing_table`<sup>Required</sup> <a name="existing_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.existingTable"></a>

```python
existing_table: DataDatabricksLakewatchDatasourceExistingTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference">DataDatabricksLakewatchDatasourceExistingTableOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.owner"></a>

```python
owner: DataDatabricksLakewatchDatasourceOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference">DataDatabricksLakewatchDatasourceOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.parsers"></a>

```python
parsers: DataDatabricksLakewatchDatasourceParsersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList">DataDatabricksLakewatchDatasourceParsersList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference">DataDatabricksLakewatchDatasourceProviderConfigOutputReference</a>

---

##### `run_as_principal`<sup>Required</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schedule"></a>

```python
schedule: DataDatabricksLakewatchDatasourceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference">DataDatabricksLakewatchDatasourceScheduleOutputReference</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.status"></a>

```python
status: DataDatabricksLakewatchDatasourceStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference">DataDatabricksLakewatchDatasourceStatusOutputReference</a>

---

##### `unity_catalog_connection`<sup>Required</sup> <a name="unity_catalog_connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.unityCatalogConnection"></a>

```python
unity_catalog_connection: DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updatedBy"></a>

```python
updated_by: DataDatabricksLakewatchDatasourceUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference">DataDatabricksLakewatchDatasourceUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchDatasourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourceAutoloader <a name="DataDatabricksLakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader(
  format: str,
  location: str,
  raw_table: DataDatabricksLakewatchDatasourceAutoloaderRawTable,
  aws_secret_scope: str = None,
  envelope: DataDatabricksLakewatchDatasourceAutoloaderEnvelope = None,
  format_options: typing.Mapping[str] = None,
  include_existing_files: bool | IResolvable = None,
  override_partition_columns: typing.List[str] = None,
  queue_url: str = None,
  service_credentials: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable">raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope">aws_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions">format_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles">include_existing_files</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns">override_partition_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials">service_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format DataDatabricksLakewatchDatasource#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#location DataDatabricksLakewatchDatasource#location}.

---

##### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.rawTable"></a>

```python
raw_table: DataDatabricksLakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#raw_table DataDatabricksLakewatchDatasource#raw_table}.

---

##### `aws_secret_scope`<sup>Optional</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```python
aws_secret_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#aws_secret_scope DataDatabricksLakewatchDatasource#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.envelope"></a>

```python
envelope: DataDatabricksLakewatchDatasourceAutoloaderEnvelope
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#envelope DataDatabricksLakewatchDatasource#envelope}.

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.formatOptions"></a>

```python
format_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#format_options DataDatabricksLakewatchDatasource#format_options}.

---

##### `include_existing_files`<sup>Optional</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```python
include_existing_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_files DataDatabricksLakewatchDatasource#include_existing_files}.

---

##### `override_partition_columns`<sup>Optional</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```python
override_partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#override_partition_columns DataDatabricksLakewatchDatasource#override_partition_columns}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#queue_url DataDatabricksLakewatchDatasource#queue_url}.

---

##### `service_credentials`<sup>Optional</sup> <a name="service_credentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```python
service_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#service_credentials DataDatabricksLakewatchDatasource#service_credentials}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope(
  cloud_watch_logs: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs = None,
  json_array: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">cloud_watch_logs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray">json_array</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}. |

---

##### `cloud_watch_logs`<sup>Optional</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```python
cloud_watch_logs: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}.

---

##### `json_array`<sup>Optional</sup> <a name="json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```python
json_array: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs(
  header_retention: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">header_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}. |

---

##### `header_retention`<sup>Optional</sup> <a name="header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```python
header_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}.

---

### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}.

---

### DataDatabricksLakewatchDatasourceAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceConfig <a name="DataDatabricksLakewatchDatasourceConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksLakewatchDatasourceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#provider_config DataDatabricksLakewatchDatasource#provider_config}.

---

### DataDatabricksLakewatchDatasourceCreatedBy <a name="DataDatabricksLakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceExistingTable <a name="DataDatabricksLakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable(
  name: str,
  catalog: str = None,
  include_existing_rows: bool | IResolvable = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows">include_existing_rows</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#name DataDatabricksLakewatchDatasource#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog DataDatabricksLakewatchDatasource#catalog}.

---

##### `include_existing_rows`<sup>Optional</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```python
include_existing_rows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#include_existing_rows DataDatabricksLakewatchDatasource#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema DataDatabricksLakewatchDatasource#schema}.

---

### DataDatabricksLakewatchDatasourceOwner <a name="DataDatabricksLakewatchDatasourceOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

### DataDatabricksLakewatchDatasourceParsers <a name="DataDatabricksLakewatchDatasourceParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers(
  id: str,
  version: str,
  target_table: DataDatabricksLakewatchDatasourceParsersTargetTable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#version DataDatabricksLakewatchDatasource#version}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers.property.targetTable"></a>

```python
target_table: DataDatabricksLakewatchDatasourceParsersTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#target_table DataDatabricksLakewatchDatasource#target_table}.

---

### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceParsersTargetTable <a name="DataDatabricksLakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

### DataDatabricksLakewatchDatasourceProviderConfig <a name="DataDatabricksLakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#workspace_id DataDatabricksLakewatchDatasource#workspace_id}.

---

### DataDatabricksLakewatchDatasourceSchedule <a name="DataDatabricksLakewatchDatasourceSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule(
  at_least_every: str = None,
  compute_group: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup">compute_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#at_least_every DataDatabricksLakewatchDatasource#at_least_every}.

---

##### `compute_group`<sup>Optional</sup> <a name="compute_group" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.computeGroup"></a>

```python
compute_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#compute_group DataDatabricksLakewatchDatasource#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#continuous DataDatabricksLakewatchDatasource#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cron_expression DataDatabricksLakewatchDatasource#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#enabled DataDatabricksLakewatchDatasource#enabled}.

---

### DataDatabricksLakewatchDatasourceStatus <a name="DataDatabricksLakewatchDatasourceStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus()
```


### DataDatabricksLakewatchDatasourceStatusIngestionJob <a name="DataDatabricksLakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob()
```


### DataDatabricksLakewatchDatasourceStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline()
```


### DataDatabricksLakewatchDatasourceUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection(
  connection_name: str,
  configuration: typing.Mapping[str] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}. |

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#connection_name DataDatabricksLakewatchDatasource#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#configuration DataDatabricksLakewatchDatasource#configuration}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#start_time DataDatabricksLakewatchDatasource#start_time}.

---

### DataDatabricksLakewatchDatasourceUpdatedBy <a name="DataDatabricksLakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#display_name DataDatabricksLakewatchDatasource#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#email DataDatabricksLakewatchDatasource#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#id DataDatabricksLakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#principal_type DataDatabricksLakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">reset_header_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_retention` <a name="reset_header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```python
def reset_header_retention() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">header_retention_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">header_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_retention_input`<sup>Optional</sup> <a name="header_retention_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```python
header_retention_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header_retention`<sup>Required</sup> <a name="header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```python
header_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">put_cloud_watch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">put_json_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">reset_cloud_watch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">reset_json_array</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_watch_logs` <a name="put_cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```python
def put_cloud_watch_logs(
  header_retention: bool | IResolvable = None
) -> None
```

###### `header_retention`<sup>Optional</sup> <a name="header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.headerRetention"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#header_retention DataDatabricksLakewatchDatasource#header_retention}.

---

##### `put_json_array` <a name="put_json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```python
def put_json_array(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#path DataDatabricksLakewatchDatasource#path}.

---

##### `reset_cloud_watch_logs` <a name="reset_cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```python
def reset_cloud_watch_logs() -> None
```

##### `reset_json_array` <a name="reset_json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```python
def reset_json_array() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloud_watch_logs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">json_array</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloud_watch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">json_array_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_logs`<sup>Required</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```python
cloud_watch_logs: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `json_array`<sup>Required</sup> <a name="json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```python
json_array: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloud_watch_logs_input`<sup>Optional</sup> <a name="cloud_watch_logs_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```python
cloud_watch_logs_input: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `json_array_input`<sup>Optional</sup> <a name="json_array_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```python
json_array_input: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope">put_envelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable">put_raw_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">reset_aws_secret_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope">reset_envelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">reset_include_existing_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">reset_override_partition_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">reset_service_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_envelope` <a name="put_envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```python
def put_envelope(
  cloud_watch_logs: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs = None,
  json_array: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray = None
) -> None
```

###### `cloud_watch_logs`<sup>Optional</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.cloudWatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#cloud_watch_logs DataDatabricksLakewatchDatasource#cloud_watch_logs}.

---

###### `json_array`<sup>Optional</sup> <a name="json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.jsonArray"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#json_array DataDatabricksLakewatchDatasource#json_array}.

---

##### `put_raw_table` <a name="put_raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```python
def put_raw_table(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

##### `reset_aws_secret_scope` <a name="reset_aws_secret_scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```python
def reset_aws_secret_scope() -> None
```

##### `reset_envelope` <a name="reset_envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```python
def reset_envelope() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_include_existing_files` <a name="reset_include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```python
def reset_include_existing_files() -> None
```

##### `reset_override_partition_columns` <a name="reset_override_partition_columns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```python
def reset_override_partition_columns() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```

##### `reset_service_credentials` <a name="reset_service_credentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```python
def reset_service_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effective_include_existing_files</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">effective_raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable">raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">aws_secret_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">envelope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">format_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">include_existing_files_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">override_partition_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">raw_table_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">service_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">aws_secret_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions">format_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">include_existing_files</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">override_partition_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">service_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_include_existing_files`<sup>Required</sup> <a name="effective_include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```python
effective_include_existing_files: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_raw_table`<sup>Required</sup> <a name="effective_raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```python
effective_raw_table: DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```python
envelope: DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```python
raw_table: DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `aws_secret_scope_input`<sup>Optional</sup> <a name="aws_secret_scope_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```python
aws_secret_scope_input: str
```

- *Type:* str

---

##### `envelope_input`<sup>Optional</sup> <a name="envelope_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```python
envelope_input: IResolvable | DataDatabricksLakewatchDatasourceAutoloaderEnvelope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderEnvelope">DataDatabricksLakewatchDatasourceAutoloaderEnvelope</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```python
format_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_existing_files_input`<sup>Optional</sup> <a name="include_existing_files_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```python
include_existing_files_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `override_partition_columns_input`<sup>Optional</sup> <a name="override_partition_columns_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```python
override_partition_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `raw_table_input`<sup>Optional</sup> <a name="raw_table_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```python
raw_table_input: DataDatabricksLakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---

##### `service_credentials_input`<sup>Optional</sup> <a name="service_credentials_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```python
service_credentials_input: str
```

- *Type:* str

---

##### `aws_secret_scope`<sup>Required</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```python
aws_secret_scope: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```python
format_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_existing_files`<sup>Required</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```python
include_existing_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `override_partition_columns`<sup>Required</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```python
override_partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `service_credentials`<sup>Required</sup> <a name="service_credentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```python
service_credentials: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceAutoloader
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloader">DataDatabricksLakewatchDatasourceAutoloader</a>

---


### DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceAutoloaderRawTable">DataDatabricksLakewatchDatasourceAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourceCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceCreatedBy">DataDatabricksLakewatchDatasourceCreatedBy</a>

---


### DataDatabricksLakewatchDatasourceExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">reset_include_existing_rows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_include_existing_rows` <a name="reset_include_existing_rows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```python
def reset_include_existing_rows() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">effective_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName">effective_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">effective_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">include_existing_rows_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">include_existing_rows</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_catalog`<sup>Required</sup> <a name="effective_catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```python
effective_catalog: str
```

- *Type:* str

---

##### `effective_name`<sup>Required</sup> <a name="effective_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```python
effective_name: str
```

- *Type:* str

---

##### `effective_schema`<sup>Required</sup> <a name="effective_schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```python
effective_schema: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `include_existing_rows_input`<sup>Optional</sup> <a name="include_existing_rows_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```python
include_existing_rows_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `include_existing_rows`<sup>Required</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```python
include_existing_rows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceExistingTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceExistingTable">DataDatabricksLakewatchDatasourceExistingTable</a>

---


### DataDatabricksLakewatchDatasourceOwnerOutputReference <a name="DataDatabricksLakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceOwner">DataDatabricksLakewatchDatasourceOwner</a>

---


### DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourceParsersList <a name="DataDatabricksLakewatchDatasourceParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchDatasourceParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchDatasourceParsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>]

---


### DataDatabricksLakewatchDatasourceParsersOutputReference <a name="DataDatabricksLakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable">put_target_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable">reset_target_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_table` <a name="put_target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```python
def put_target_table(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#table_name DataDatabricksLakewatchDatasource#table_name}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#catalog_name DataDatabricksLakewatchDatasource#catalog_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.putTargetTable.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource#schema_name DataDatabricksLakewatchDatasource#schema_name}.

---

##### `reset_target_table` <a name="reset_target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```python
def reset_target_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">effective_target_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput">target_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_target_table`<sup>Required</sup> <a name="effective_target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```python
effective_target_table: DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```python
target_table: DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_table_input`<sup>Optional</sup> <a name="target_table_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```python
target_table_input: IResolvable | DataDatabricksLakewatchDatasourceParsersTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceParsers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsers">DataDatabricksLakewatchDatasourceParsers</a>

---


### DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourceParsersTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceParsersTargetTable">DataDatabricksLakewatchDatasourceParsersTargetTable</a>

---


### DataDatabricksLakewatchDatasourceProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceProviderConfig">DataDatabricksLakewatchDatasourceProviderConfig</a>

---


### DataDatabricksLakewatchDatasourceScheduleOutputReference <a name="DataDatabricksLakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup">reset_compute_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_compute_group` <a name="reset_compute_group" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```python
def reset_compute_group() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput">compute_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup">compute_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `compute_group_input`<sup>Optional</sup> <a name="compute_group_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```python
compute_group_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `compute_group`<sup>Required</sup> <a name="compute_group" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```python
compute_group: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceSchedule">DataDatabricksLakewatchDatasourceSchedule</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceStatusIngestionJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJob">DataDatabricksLakewatchDatasourceStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceStatusIngestionPipeline
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipeline">DataDatabricksLakewatchDatasourceStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourceStatusOutputReference <a name="DataDatabricksLakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob">ingestion_job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline">ingestion_pipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_job`<sup>Required</sup> <a name="ingestion_job" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```python
ingestion_job: DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `ingestion_pipeline`<sup>Required</sup> <a name="ingestion_pipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```python
ingestion_pipeline: DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceStatus">DataDatabricksLakewatchDatasourceStatus</a>

---


### DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">effective_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```python
connector: str
```

- *Type:* str

---

##### `effective_start_time`<sup>Required</sup> <a name="effective_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```python
effective_start_time: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceUnityCatalogConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUnityCatalogConnection">DataDatabricksLakewatchDatasourceUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourceUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource

dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasource.DataDatabricksLakewatchDatasourceUpdatedBy">DataDatabricksLakewatchDatasourceUpdatedBy</a>

---



