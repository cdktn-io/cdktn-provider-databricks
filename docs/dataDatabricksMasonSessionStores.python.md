# `dataDatabricksMasonSessionStores` Submodule <a name="`dataDatabricksMasonSessionStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonSessionStores <a name="DataDatabricksMasonSessionStores" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores databricks_mason_session_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores(
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
  provider_config: DataDatabricksMasonSessionStoresProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#page_size DataDatabricksMasonSessionStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#provider_config DataDatabricksMasonSessionStores#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#page_size DataDatabricksMasonSessionStores#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#provider_config DataDatabricksMasonSessionStores#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#workspace_id DataDatabricksMasonSessionStores#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksMasonSessionStores resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksMasonSessionStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMasonSessionStores to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMasonSessionStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonSessionStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference">DataDatabricksMasonSessionStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.sessionStores">session_stores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList">DataDatabricksMasonSessionStoresSessionStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonSessionStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference">DataDatabricksMasonSessionStoresProviderConfigOutputReference</a>

---

##### `session_stores`<sup>Required</sup> <a name="session_stores" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.sessionStores"></a>

```python
session_stores: DataDatabricksMasonSessionStoresSessionStoresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList">DataDatabricksMasonSessionStoresSessionStoresList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksMasonSessionStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStores.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonSessionStoresConfig <a name="DataDatabricksMasonSessionStoresConfig" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksMasonSessionStoresProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#page_size DataDatabricksMasonSessionStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#provider_config DataDatabricksMasonSessionStores#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#page_size DataDatabricksMasonSessionStores#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonSessionStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#provider_config DataDatabricksMasonSessionStores#provider_config}.

---

### DataDatabricksMasonSessionStoresProviderConfig <a name="DataDatabricksMasonSessionStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#workspace_id DataDatabricksMasonSessionStores#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#workspace_id DataDatabricksMasonSessionStores#workspace_id}.

---

### DataDatabricksMasonSessionStoresSessionStores <a name="DataDatabricksMasonSessionStoresSessionStores" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores(
  name: str,
  provider_config: DataDatabricksMasonSessionStoresSessionStoresProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#name DataDatabricksMasonSessionStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig">DataDatabricksMasonSessionStoresSessionStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#provider_config DataDatabricksMasonSessionStores#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#name DataDatabricksMasonSessionStores#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonSessionStoresSessionStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig">DataDatabricksMasonSessionStoresSessionStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#provider_config DataDatabricksMasonSessionStores#provider_config}.

---

### DataDatabricksMasonSessionStoresSessionStoresProviderConfig <a name="DataDatabricksMasonSessionStoresSessionStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#workspace_id DataDatabricksMasonSessionStores#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#workspace_id DataDatabricksMasonSessionStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonSessionStoresProviderConfigOutputReference <a name="DataDatabricksMasonSessionStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMasonSessionStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresProviderConfig">DataDatabricksMasonSessionStoresProviderConfig</a>

---


### DataDatabricksMasonSessionStoresSessionStoresList <a name="DataDatabricksMasonSessionStoresSessionStoresList" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMasonSessionStoresSessionStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores">DataDatabricksMasonSessionStoresSessionStores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksMasonSessionStoresSessionStores]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores">DataDatabricksMasonSessionStoresSessionStores</a>]

---


### DataDatabricksMasonSessionStoresSessionStoresOutputReference <a name="DataDatabricksMasonSessionStoresSessionStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_session_stores#workspace_id DataDatabricksMasonSessionStores#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.creatorUserId">creator_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference">DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig">DataDatabricksMasonSessionStoresSessionStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores">DataDatabricksMasonSessionStoresSessionStores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_user_id`<sup>Required</sup> <a name="creator_user_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.creatorUserId"></a>

```python
creator_user_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference">DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksMasonSessionStoresSessionStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig">DataDatabricksMasonSessionStoresSessionStoresProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMasonSessionStoresSessionStores
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStores">DataDatabricksMasonSessionStoresSessionStores</a>

---


### DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference <a name="DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_session_stores

dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig">DataDatabricksMasonSessionStoresSessionStoresProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMasonSessionStoresSessionStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonSessionStores.DataDatabricksMasonSessionStoresSessionStoresProviderConfig">DataDatabricksMasonSessionStoresSessionStoresProviderConfig</a>

---



