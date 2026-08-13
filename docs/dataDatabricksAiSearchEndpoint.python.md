# `dataDatabricksAiSearchEndpoint` Submodule <a name="`dataDatabricksAiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchEndpoint <a name="DataDatabricksAiSearchEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint(
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
  provider_config: DataDatabricksAiSearchEndpointProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAiSearchEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.customTags">custom_tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList">DataDatabricksAiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.effectiveBudgetPolicyId">effective_budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointStatus">endpoint_status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference">DataDatabricksAiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.indexCount">index_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lastUpdatedUser">last_updated_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference">DataDatabricksAiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.scalingInfo">scaling_info</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference">DataDatabricksAiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.targetQps">target_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.throughputInfo">throughput_info</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference">DataDatabricksAiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.customTags"></a>

```python
custom_tags: DataDatabricksAiSearchEndpointCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList">DataDatabricksAiSearchEndpointCustomTagsList</a>

---

##### `effective_budget_policy_id`<sup>Required</sup> <a name="effective_budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```python
effective_budget_policy_id: str
```

- *Type:* str

---

##### `endpoint_status`<sup>Required</sup> <a name="endpoint_status" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointStatus"></a>

```python
endpoint_status: DataDatabricksAiSearchEndpointEndpointStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference">DataDatabricksAiSearchEndpointEndpointStatusOutputReference</a>

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_count`<sup>Required</sup> <a name="index_count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.indexCount"></a>

```python
index_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_user`<sup>Required</sup> <a name="last_updated_user" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.lastUpdatedUser"></a>

```python
last_updated_user: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiSearchEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference">DataDatabricksAiSearchEndpointProviderConfigOutputReference</a>

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_info`<sup>Required</sup> <a name="scaling_info" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.scalingInfo"></a>

```python
scaling_info: DataDatabricksAiSearchEndpointScalingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference">DataDatabricksAiSearchEndpointScalingInfoOutputReference</a>

---

##### `target_qps`<sup>Required</sup> <a name="target_qps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.targetQps"></a>

```python
target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_info`<sup>Required</sup> <a name="throughput_info" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.throughputInfo"></a>

```python
throughput_info: DataDatabricksAiSearchEndpointThroughputInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference">DataDatabricksAiSearchEndpointThroughputInfoOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAiSearchEndpointProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchEndpointConfig <a name="DataDatabricksAiSearchEndpointConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAiSearchEndpointProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#name DataDatabricksAiSearchEndpoint#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#provider_config DataDatabricksAiSearchEndpoint#provider_config}.

---

### DataDatabricksAiSearchEndpointCustomTags <a name="DataDatabricksAiSearchEndpointCustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#key DataDatabricksAiSearchEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#value DataDatabricksAiSearchEndpoint#value}.

---

### DataDatabricksAiSearchEndpointEndpointStatus <a name="DataDatabricksAiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus()
```


### DataDatabricksAiSearchEndpointProviderConfig <a name="DataDatabricksAiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#workspace_id DataDatabricksAiSearchEndpoint#workspace_id}.

---

### DataDatabricksAiSearchEndpointScalingInfo <a name="DataDatabricksAiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo(
  requested_target_qps: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.property.requestedTargetQps">requested_target_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}. |

---

##### `requested_target_qps`<sup>Optional</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```python
requested_target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#requested_target_qps DataDatabricksAiSearchEndpoint#requested_target_qps}.

---

### DataDatabricksAiSearchEndpointThroughputInfo <a name="DataDatabricksAiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo(
  maximum_concurrency_allowed: typing.Union[int, float] = None,
  minimal_concurrency_allowed: typing.Union[int, float] = None,
  requested_concurrency: typing.Union[int, float] = None,
  requested_num_replicas: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">maximum_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">minimal_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedConcurrency">requested_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedNumReplicas">requested_num_replicas</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}. |

---

##### `maximum_concurrency_allowed`<sup>Optional</sup> <a name="maximum_concurrency_allowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```python
maximum_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#maximum_concurrency_allowed DataDatabricksAiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `minimal_concurrency_allowed`<sup>Optional</sup> <a name="minimal_concurrency_allowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```python
minimal_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#minimal_concurrency_allowed DataDatabricksAiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `requested_concurrency`<sup>Optional</sup> <a name="requested_concurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```python
requested_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#requested_concurrency DataDatabricksAiSearchEndpoint#requested_concurrency}.

---

##### `requested_num_replicas`<sup>Optional</sup> <a name="requested_num_replicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```python
requested_num_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/ai_search_endpoint#requested_num_replicas DataDatabricksAiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchEndpointCustomTagsList <a name="DataDatabricksAiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiSearchEndpointCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>]

---


### DataDatabricksAiSearchEndpointCustomTagsOutputReference <a name="DataDatabricksAiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchEndpointCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointCustomTags">DataDatabricksAiSearchEndpointCustomTags</a>

---


### DataDatabricksAiSearchEndpointEndpointStatusOutputReference <a name="DataDatabricksAiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus">DataDatabricksAiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchEndpointEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointEndpointStatus">DataDatabricksAiSearchEndpointEndpointStatus</a>

---


### DataDatabricksAiSearchEndpointProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiSearchEndpointProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointProviderConfig">DataDatabricksAiSearchEndpointProviderConfig</a>

---


### DataDatabricksAiSearchEndpointScalingInfoOutputReference <a name="DataDatabricksAiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">reset_requested_target_qps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_requested_target_qps` <a name="reset_requested_target_qps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```python
def reset_requested_target_qps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">requested_target_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">requested_target_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo">DataDatabricksAiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `requested_target_qps_input`<sup>Optional</sup> <a name="requested_target_qps_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```python
requested_target_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_target_qps`<sup>Required</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```python
requested_target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointScalingInfo">DataDatabricksAiSearchEndpointScalingInfo</a>

---


### DataDatabricksAiSearchEndpointThroughputInfoOutputReference <a name="DataDatabricksAiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_search_endpoint

dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">reset_maximum_concurrency_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">reset_minimal_concurrency_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">reset_requested_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">reset_requested_num_replicas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_concurrency_allowed` <a name="reset_maximum_concurrency_allowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```python
def reset_maximum_concurrency_allowed() -> None
```

##### `reset_minimal_concurrency_allowed` <a name="reset_minimal_concurrency_allowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```python
def reset_minimal_concurrency_allowed() -> None
```

##### `reset_requested_concurrency` <a name="reset_requested_concurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```python
def reset_requested_concurrency() -> None
```

##### `reset_requested_num_replicas` <a name="reset_requested_num_replicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```python
def reset_requested_num_replicas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">change_request_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">change_request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">current_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">current_concurrency_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">current_num_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">maximum_concurrency_allowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">minimal_concurrency_allowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">requested_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">requested_num_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">maximum_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">minimal_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">requested_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">requested_num_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo">DataDatabricksAiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_request_message`<sup>Required</sup> <a name="change_request_message" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```python
change_request_message: str
```

- *Type:* str

---

##### `change_request_state`<sup>Required</sup> <a name="change_request_state" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```python
change_request_state: str
```

- *Type:* str

---

##### `current_concurrency`<sup>Required</sup> <a name="current_concurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```python
current_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_concurrency_utilization_percentage`<sup>Required</sup> <a name="current_concurrency_utilization_percentage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```python
current_concurrency_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_num_replicas`<sup>Required</sup> <a name="current_num_replicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```python
current_num_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_concurrency_allowed_input`<sup>Optional</sup> <a name="maximum_concurrency_allowed_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```python
maximum_concurrency_allowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_concurrency_allowed_input`<sup>Optional</sup> <a name="minimal_concurrency_allowed_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```python
minimal_concurrency_allowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_concurrency_input`<sup>Optional</sup> <a name="requested_concurrency_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```python
requested_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_num_replicas_input`<sup>Optional</sup> <a name="requested_num_replicas_input" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```python
requested_num_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_concurrency_allowed`<sup>Required</sup> <a name="maximum_concurrency_allowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```python
maximum_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_concurrency_allowed`<sup>Required</sup> <a name="minimal_concurrency_allowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```python
minimal_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_concurrency`<sup>Required</sup> <a name="requested_concurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```python
requested_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_num_replicas`<sup>Required</sup> <a name="requested_num_replicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```python
requested_num_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiSearchEndpointThroughputInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoint.DataDatabricksAiSearchEndpointThroughputInfo">DataDatabricksAiSearchEndpointThroughputInfo</a>

---



