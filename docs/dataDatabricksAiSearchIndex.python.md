# `dataDatabricksAiSearchIndex` Submodule <a name="`dataDatabricksAiSearchIndex` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchIndex <a name="DataDatabricksAiSearchIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index databricks_ai_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex(
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
  provider_config: DataDatabricksAiSearchIndexProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAiSearchIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAiSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.deltaSyncIndexSpec">delta_sync_index_spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.directAccessIndexSpec">direct_access_index_spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexSubtype">index_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexType">index_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference">DataDatabricksAiSearchIndexProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference">DataDatabricksAiSearchIndexStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `delta_sync_index_spec`<sup>Required</sup> <a name="delta_sync_index_spec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.deltaSyncIndexSpec"></a>

```python
delta_sync_index_spec: DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `direct_access_index_spec`<sup>Required</sup> <a name="direct_access_index_spec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.directAccessIndexSpec"></a>

```python
direct_access_index_spec: DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `index_subtype`<sup>Required</sup> <a name="index_subtype" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexSubtype"></a>

```python
index_subtype: str
```

- *Type:* str

---

##### `index_type`<sup>Required</sup> <a name="index_type" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexType"></a>

```python
index_type: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiSearchIndexProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference">DataDatabricksAiSearchIndexProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.status"></a>

```python
status: DataDatabricksAiSearchIndexStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference">DataDatabricksAiSearchIndexStatusOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAiSearchIndexProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchIndexConfig <a name="DataDatabricksAiSearchIndexConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAiSearchIndexProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiSearchIndexProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpec <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec(
  pipeline_type: str,
  columns_to_sync: typing.List[str] = None,
  embedding_source_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns] = None,
  embedding_vector_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns] = None,
  embedding_writeback_table: str = None,
  source_table: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.pipelineType">pipeline_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.columnsToSync">columns_to_sync</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">embedding_source_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">embedding_vector_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">embedding_writeback_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.sourceTable">source_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}. |

---

##### `pipeline_type`<sup>Required</sup> <a name="pipeline_type" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```python
pipeline_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}.

---

##### `columns_to_sync`<sup>Optional</sup> <a name="columns_to_sync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.columnsToSync"></a>

```python
columns_to_sync: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}.

---

##### `embedding_source_columns`<sup>Optional</sup> <a name="embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```python
embedding_source_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}.

---

##### `embedding_vector_columns`<sup>Optional</sup> <a name="embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```python
embedding_vector_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}.

---

##### `embedding_writeback_table`<sup>Optional</sup> <a name="embedding_writeback_table" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```python
embedding_writeback_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}.

---

##### `source_table`<sup>Optional</sup> <a name="source_table" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```python
source_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns(
  embedding_model_endpoint: str = None,
  model_endpoint_name_for_query: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embedding_model_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">model_endpoint_name_for_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embedding_model_endpoint`<sup>Optional</sup> <a name="embedding_model_endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```python
embedding_model_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}.

---

##### `model_endpoint_name_for_query`<sup>Optional</sup> <a name="model_endpoint_name_for_query" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```python
model_endpoint_name_for_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns(
  embedding_dimension: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embedding_dimension</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embedding_dimension`<sup>Optional</sup> <a name="embedding_dimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```python
embedding_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpec <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec(
  embedding_source_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns] = None,
  embedding_vector_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns] = None,
  schema_json: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">embedding_source_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">embedding_vector_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.schemaJson">schema_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}. |

---

##### `embedding_source_columns`<sup>Optional</sup> <a name="embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```python
embedding_source_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}.

---

##### `embedding_vector_columns`<sup>Optional</sup> <a name="embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```python
embedding_vector_columns: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}.

---

##### `schema_json`<sup>Optional</sup> <a name="schema_json" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```python
schema_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns(
  embedding_model_endpoint: str = None,
  model_endpoint_name_for_query: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embedding_model_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">model_endpoint_name_for_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embedding_model_endpoint`<sup>Optional</sup> <a name="embedding_model_endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```python
embedding_model_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}.

---

##### `model_endpoint_name_for_query`<sup>Optional</sup> <a name="model_endpoint_name_for_query" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```python
model_endpoint_name_for_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns(
  embedding_dimension: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embedding_dimension</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `embedding_dimension`<sup>Optional</sup> <a name="embedding_dimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```python
embedding_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexProviderConfig <a name="DataDatabricksAiSearchIndexProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}.

---

### DataDatabricksAiSearchIndexStatus <a name="DataDatabricksAiSearchIndexStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">reset_embedding_model_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">reset_model_endpoint_name_for_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_embedding_model_endpoint` <a name="reset_embedding_model_endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```python
def reset_embedding_model_endpoint() -> None
```

##### `reset_model_endpoint_name_for_query` <a name="reset_model_endpoint_name_for_query" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```python
def reset_model_endpoint_name_for_query() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embedding_model_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">model_endpoint_name_for_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embedding_model_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">model_endpoint_name_for_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_model_endpoint_input`<sup>Optional</sup> <a name="embedding_model_endpoint_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```python
embedding_model_endpoint_input: str
```

- *Type:* str

---

##### `model_endpoint_name_for_query_input`<sup>Optional</sup> <a name="model_endpoint_name_for_query_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```python
model_endpoint_name_for_query_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `embedding_model_endpoint`<sup>Required</sup> <a name="embedding_model_endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```python
embedding_model_endpoint: str
```

- *Type:* str

---

##### `model_endpoint_name_for_query`<sup>Required</sup> <a name="model_endpoint_name_for_query" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```python
model_endpoint_name_for_query: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">reset_embedding_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_embedding_dimension` <a name="reset_embedding_dimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```python
def reset_embedding_dimension() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embedding_dimension_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embedding_dimension</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_dimension_input`<sup>Optional</sup> <a name="embedding_dimension_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```python
embedding_dimension_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `embedding_dimension`<sup>Required</sup> <a name="embedding_dimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```python
embedding_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">put_embedding_source_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">put_embedding_vector_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync">reset_columns_to_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">reset_embedding_source_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">reset_embedding_vector_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">reset_embedding_writeback_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">reset_source_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_embedding_source_columns` <a name="put_embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```python
def put_embedding_source_columns(
  value: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]

---

##### `put_embedding_vector_columns` <a name="put_embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```python
def put_embedding_vector_columns(
  value: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]

---

##### `reset_columns_to_sync` <a name="reset_columns_to_sync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```python
def reset_columns_to_sync() -> None
```

##### `reset_embedding_source_columns` <a name="reset_embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```python
def reset_embedding_source_columns() -> None
```

##### `reset_embedding_vector_columns` <a name="reset_embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```python
def reset_embedding_vector_columns() -> None
```

##### `reset_embedding_writeback_table` <a name="reset_embedding_writeback_table" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```python
def reset_embedding_writeback_table() -> None
```

##### `reset_source_table` <a name="reset_source_table" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```python
def reset_source_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">embedding_source_columns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">embedding_vector_columns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">columns_to_sync_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">embedding_source_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">embedding_vector_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">embedding_writeback_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">pipeline_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">source_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync">columns_to_sync</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">embedding_writeback_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">pipeline_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">source_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec">DataDatabricksAiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_source_columns`<sup>Required</sup> <a name="embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```python
embedding_source_columns: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embedding_vector_columns`<sup>Required</sup> <a name="embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```python
embedding_vector_columns: DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `columns_to_sync_input`<sup>Optional</sup> <a name="columns_to_sync_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```python
columns_to_sync_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `embedding_source_columns_input`<sup>Optional</sup> <a name="embedding_source_columns_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```python
embedding_source_columns_input: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>]

---

##### `embedding_vector_columns_input`<sup>Optional</sup> <a name="embedding_vector_columns_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```python
embedding_vector_columns_input: IResolvable | typing.List[DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>]

---

##### `embedding_writeback_table_input`<sup>Optional</sup> <a name="embedding_writeback_table_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```python
embedding_writeback_table_input: str
```

- *Type:* str

---

##### `pipeline_type_input`<sup>Optional</sup> <a name="pipeline_type_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```python
pipeline_type_input: str
```

- *Type:* str

---

##### `source_table_input`<sup>Optional</sup> <a name="source_table_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```python
source_table_input: str
```

- *Type:* str

---

##### `columns_to_sync`<sup>Required</sup> <a name="columns_to_sync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```python
columns_to_sync: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `embedding_writeback_table`<sup>Required</sup> <a name="embedding_writeback_table" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```python
embedding_writeback_table: str
```

- *Type:* str

---

##### `pipeline_type`<sup>Required</sup> <a name="pipeline_type" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```python
pipeline_type: str
```

- *Type:* str

---

##### `source_table`<sup>Required</sup> <a name="source_table" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```python
source_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchIndexDeltaSyncIndexSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec">DataDatabricksAiSearchIndexDeltaSyncIndexSpec</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">reset_embedding_model_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">reset_model_endpoint_name_for_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_embedding_model_endpoint` <a name="reset_embedding_model_endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```python
def reset_embedding_model_endpoint() -> None
```

##### `reset_model_endpoint_name_for_query` <a name="reset_model_endpoint_name_for_query" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```python
def reset_model_endpoint_name_for_query() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embedding_model_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">model_endpoint_name_for_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embedding_model_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">model_endpoint_name_for_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_model_endpoint_input`<sup>Optional</sup> <a name="embedding_model_endpoint_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```python
embedding_model_endpoint_input: str
```

- *Type:* str

---

##### `model_endpoint_name_for_query_input`<sup>Optional</sup> <a name="model_endpoint_name_for_query_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```python
model_endpoint_name_for_query_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `embedding_model_endpoint`<sup>Required</sup> <a name="embedding_model_endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```python
embedding_model_endpoint: str
```

- *Type:* str

---

##### `model_endpoint_name_for_query`<sup>Required</sup> <a name="model_endpoint_name_for_query" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```python
model_endpoint_name_for_query: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">reset_embedding_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_embedding_dimension` <a name="reset_embedding_dimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```python
def reset_embedding_dimension() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embedding_dimension_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embedding_dimension</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_dimension_input`<sup>Optional</sup> <a name="embedding_dimension_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```python
embedding_dimension_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `embedding_dimension`<sup>Required</sup> <a name="embedding_dimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```python
embedding_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">put_embedding_source_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">put_embedding_vector_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">reset_embedding_source_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">reset_embedding_vector_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">reset_schema_json</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_embedding_source_columns` <a name="put_embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```python
def put_embedding_source_columns(
  value: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]

---

##### `put_embedding_vector_columns` <a name="put_embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```python
def put_embedding_vector_columns(
  value: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]

---

##### `reset_embedding_source_columns` <a name="reset_embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```python
def reset_embedding_source_columns() -> None
```

##### `reset_embedding_vector_columns` <a name="reset_embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```python
def reset_embedding_vector_columns() -> None
```

##### `reset_schema_json` <a name="reset_schema_json" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```python
def reset_schema_json() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">embedding_source_columns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">embedding_vector_columns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">embedding_source_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">embedding_vector_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">schema_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">schema_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec">DataDatabricksAiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `embedding_source_columns`<sup>Required</sup> <a name="embedding_source_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```python
embedding_source_columns: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embedding_vector_columns`<sup>Required</sup> <a name="embedding_vector_columns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```python
embedding_vector_columns: DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `embedding_source_columns_input`<sup>Optional</sup> <a name="embedding_source_columns_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```python
embedding_source_columns_input: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>]

---

##### `embedding_vector_columns_input`<sup>Optional</sup> <a name="embedding_vector_columns_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```python
embedding_vector_columns_input: IResolvable | typing.List[DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>]

---

##### `schema_json_input`<sup>Optional</sup> <a name="schema_json_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```python
schema_json_input: str
```

- *Type:* str

---

##### `schema_json`<sup>Required</sup> <a name="schema_json" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```python
schema_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchIndexDirectAccessIndexSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec">DataDatabricksAiSearchIndexDirectAccessIndexSpec</a>

---


### DataDatabricksAiSearchIndexProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiSearchIndexProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---


### DataDatabricksAiSearchIndexStatusOutputReference <a name="DataDatabricksAiSearchIndexStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_index

dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexedRowCount">indexed_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexUrl">index_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.ready">ready</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus">DataDatabricksAiSearchIndexStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indexed_row_count`<sup>Required</sup> <a name="indexed_row_count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```python
indexed_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `index_url`<sup>Required</sup> <a name="index_url" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexUrl"></a>

```python
index_url: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.ready"></a>

```python
ready: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchIndexStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus">DataDatabricksAiSearchIndexStatus</a>

---



