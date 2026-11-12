# `dataDatabricksGenieAgents` Submodule <a name="`dataDatabricksGenieAgents` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgents <a name="DataDatabricksGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents databricks_genie_agents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgents(
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
  provider_config: DataDatabricksGenieAgentsProviderConfig = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgents.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksGenieAgents to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksGenieAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents">genie_agents</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `genie_agents`<sup>Required</sup> <a name="genie_agents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.genieAgents"></a>

```python
genie_agents: DataDatabricksGenieAgentsGenieAgentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList">DataDatabricksGenieAgentsGenieAgentsList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfig"></a>

```python
provider_config: DataDatabricksGenieAgentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksGenieAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentsConfig <a name="DataDatabricksGenieAgentsConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksGenieAgentsProviderConfig = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksGenieAgentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}.

---

### DataDatabricksGenieAgentsGenieAgents <a name="DataDatabricksGenieAgentsGenieAgents" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents(
  name: str,
  provider_config: DataDatabricksGenieAgentsGenieAgentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents.property.providerConfig"></a>

```python
provider_config: DataDatabricksGenieAgentsGenieAgentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinition <a name="DataDatabricksGenieAgentsGenieAgentsDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition(
  benchmarks: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks = None,
  config: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig = None,
  data_sources: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources = None,
  instructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.benchmarks"></a>

```python
benchmarks: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.config"></a>

```python
config: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}.

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.dataSources"></a>

```python
data_sources: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition.property.instructions"></a>

```python
instructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks(
  questions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions">questions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks.property.questions"></a>

```python
questions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions(
  id: str,
  question: str,
  answer: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer] = None,
  evaluation_note: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote">evaluation_note</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.answer"></a>

```python
answer: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}.

---

##### `evaluation_note`<sup>Optional</sup> <a name="evaluation_note" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```python
evaluation_note: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer(
  content: str,
  format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfig <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig(
  sample_questions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions">sample_questions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}. |

---

##### `sample_questions`<sup>Optional</sup> <a name="sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig.property.sampleQuestions"></a>

```python
sample_questions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions(
  id: str,
  question: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources(
  mcp_connections: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections] = None,
  tables: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables] = None,
  volumes: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections">mcp_connections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables">tables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}. |

---

##### `mcp_connections`<sup>Optional</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.mcpConnections"></a>

```python
mcp_connections: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.tables"></a>

```python
tables: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources.property.volumes"></a>

```python
volumes: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections(
  mcp_connection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection">mcp_connection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}. |

---

##### `mcp_connection`<sup>Required</sup> <a name="mcp_connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```python
mcp_connection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables(
  identifier: str,
  column_configs: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs] = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs">column_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `column_configs`<sup>Optional</sup> <a name="column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.columnConfigs"></a>

```python
column_configs: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs(
  column: str,
  description: str = None,
  display_name: str = None,
  enable_entity_matching: bool | IResolvable = None,
  enable_format_assistance: bool | IResolvable = None,
  exclude: bool | IResolvable = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enable_entity_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enable_format_assistance</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```python
column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `enable_entity_matching`<sup>Optional</sup> <a name="enable_entity_matching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```python
enable_entity_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}.

---

##### `enable_format_assistance`<sup>Optional</sup> <a name="enable_format_assistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```python
enable_format_assistance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```python
exclude: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes(
  path: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions(
  example_question_sqls: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls] = None,
  join_specs: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs] = None,
  sql_functions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions] = None,
  sql_snippets: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets = None,
  text_instructions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls">example_question_sqls</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs">join_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions">sql_functions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets">sql_snippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions">text_instructions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}. |

---

##### `example_question_sqls`<sup>Optional</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.exampleQuestionSqls"></a>

```python
example_question_sqls: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}.

---

##### `join_specs`<sup>Optional</sup> <a name="join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.joinSpecs"></a>

```python
join_specs: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}.

---

##### `sql_functions`<sup>Optional</sup> <a name="sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlFunctions"></a>

```python
sql_functions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}.

---

##### `sql_snippets`<sup>Optional</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.sqlSnippets"></a>

```python
sql_snippets: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}.

---

##### `text_instructions`<sup>Optional</sup> <a name="text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions.property.textInstructions"></a>

```python
text_instructions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls(
  id: str,
  question: str,
  sql: str,
  parameters: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters] = None,
  usage_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usage_guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```python
parameters: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}.

---

##### `usage_guidance`<sup>Optional</sup> <a name="usage_guidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```python
usage_guidance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters(
  name: str,
  default_value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue = None,
  description: str = None,
  type_hint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">type_hint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```python
default_value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}.

---

##### `type_hint`<sup>Optional</sup> <a name="type_hint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```python
type_hint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue(
  value_range: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}. |

---

##### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```python
value_range: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange(
  max: str = None,
  min: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```python
max: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```python
min: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs(
  id: str,
  left: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft,
  right: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight,
  sql: str,
  comment: str = None,
  instruction: str = None,
  relationship_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType">relationship_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.left"></a>

```python
left: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.right"></a>

```python
right: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `relationship_type`<sup>Optional</sup> <a name="relationship_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft(
  identifier: str,
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight(
  identifier: str,
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions(
  id: str,
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets(
  expressions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions] = None,
  filters: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters] = None,
  measures: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.expressions"></a>

```python
expressions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.filters"></a>

```python
filters: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets.property.measures"></a>

```python
measures: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions(
  id: str,
  sql: str,
  alias: str = None,
  display_name: str = None,
  instruction: str = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters(
  id: str,
  sql: str,
  display_name: str = None,
  instruction: str = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures(
  id: str,
  sql: str,
  alias: str = None,
  display_name: str = None,
  instruction: str = None,
  synonyms: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}.

---

### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions(
  content: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentsGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

### DataDatabricksGenieAgentsProviderConfig <a name="DataDatabricksGenieAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions">put_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions">reset_questions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_questions` <a name="put_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions"></a>

```python
def put_questions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]

---

##### `reset_questions` <a name="reset_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.resetQuestions"></a>

```python
def reset_questions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput">questions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questions"></a>

```python
questions: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList</a>

---

##### `questions_input`<sup>Optional</sup> <a name="questions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```python
questions_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer">put_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer">reset_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">reset_evaluation_note</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_answer` <a name="put_answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```python
def put_answer(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]

---

##### `reset_answer` <a name="reset_answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```python
def reset_answer() -> None
```

##### `reset_evaluation_note` <a name="reset_evaluation_note" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```python
def reset_evaluation_note() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answer_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluation_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluation_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```python
answer: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answer_input`<sup>Optional</sup> <a name="answer_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```python
answer_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer</a>]

---

##### `evaluation_note_input`<sup>Optional</sup> <a name="evaluation_note_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```python
evaluation_note_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `evaluation_note`<sup>Required</sup> <a name="evaluation_note" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```python
evaluation_note: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions">put_sample_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions">reset_sample_questions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sample_questions` <a name="put_sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions"></a>

```python
def put_sample_questions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]

---

##### `reset_sample_questions` <a name="reset_sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.resetSampleQuestions"></a>

```python
def reset_sample_questions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions">sample_questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput">sample_questions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sample_questions`<sup>Required</sup> <a name="sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestions"></a>

```python
sample_questions: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList</a>

---

##### `sample_questions_input`<sup>Optional</sup> <a name="sample_questions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```python
sample_questions_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcp_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcp_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_connection_input`<sup>Optional</sup> <a name="mcp_connection_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```python
mcp_connection_input: str
```

- *Type:* str

---

##### `mcp_connection`<sup>Required</sup> <a name="mcp_connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```python
mcp_connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections">put_mcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables">put_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections">reset_mcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables">reset_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mcp_connections` <a name="put_mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```python
def put_mcp_connections(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]

---

##### `put_tables` <a name="put_tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables"></a>

```python
def put_tables(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]

---

##### `put_volumes` <a name="put_volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]

---

##### `reset_mcp_connections` <a name="reset_mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```python
def reset_mcp_connections() -> None
```

##### `reset_tables` <a name="reset_tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetTables"></a>

```python
def reset_tables() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections">mcp_connections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcp_connections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput">tables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput">volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_connections`<sup>Required</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```python
mcp_connections: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tables"></a>

```python
tables: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumes"></a>

```python
volumes: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList</a>

---

##### `mcp_connections_input`<sup>Optional</sup> <a name="mcp_connections_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```python
mcp_connections_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```python
tables_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```python
volumes_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">reset_enable_entity_matching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">reset_enable_format_assistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_entity_matching` <a name="reset_enable_entity_matching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```python
def reset_enable_entity_matching() -> None
```

##### `reset_enable_format_assistance` <a name="reset_enable_format_assistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```python
def reset_enable_format_assistance() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enable_entity_matching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enable_format_assistance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">exclude_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enable_entity_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enable_format_assistance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_entity_matching_input`<sup>Optional</sup> <a name="enable_entity_matching_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```python
enable_entity_matching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_format_assistance_input`<sup>Optional</sup> <a name="enable_format_assistance_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```python
enable_format_assistance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```python
exclude_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_entity_matching`<sup>Required</sup> <a name="enable_entity_matching" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```python
enable_entity_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_format_assistance`<sup>Required</sup> <a name="enable_format_assistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```python
enable_format_assistance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```python
exclude: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs">put_column_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">reset_column_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_configs` <a name="put_column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```python
def put_column_configs(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]

---

##### `reset_column_configs` <a name="reset_column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```python
def reset_column_configs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs">column_configs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">column_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_configs`<sup>Required</sup> <a name="column_configs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```python
column_configs: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `column_configs_input`<sup>Optional</sup> <a name="column_configs_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```python
column_configs_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">reset_usage_guidance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_usage_guidance` <a name="reset_usage_guidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```python
def reset_usage_guidance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usage_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usage_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```python
parameters: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `usage_guidance_input`<sup>Optional</sup> <a name="usage_guidance_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```python
usage_guidance_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `usage_guidance`<sup>Required</sup> <a name="usage_guidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```python
usage_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">put_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">reset_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_range` <a name="put_value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```python
def put_value_range(
  max: str = None,
  min: str = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.max"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.min"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}.

---

##### `reset_value_range` <a name="reset_value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```python
def reset_value_range() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">value_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_range`<sup>Required</sup> <a name="value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```python
value_range: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `value_range_input`<sup>Optional</sup> <a name="value_range_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```python
value_range_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```python
max_input: str
```

- *Type:* str

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```python
min_input: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```python
max: str
```

- *Type:* str

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```python
min: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">reset_type_hint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  value_range: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = None,
  values: typing.List[str] = None
) -> None
```

###### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.valueRange"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}.

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type_hint` <a name="reset_type_hint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```python
def reset_type_hint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">type_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">type_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```python
default_value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_hint_input`<sup>Optional</sup> <a name="type_hint_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```python
type_hint_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type_hint`<sup>Required</sup> <a name="type_hint" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```python
type_hint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft">put_left</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight">put_right</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">reset_relationship_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left` <a name="put_left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```python
def put_left(
  identifier: str,
  alias: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `put_right` <a name="put_right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```python
def put_right(
  identifier: str,
  alias: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}.

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_relationship_type` <a name="reset_relationship_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```python
def reset_relationship_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">left_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationship_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">right_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationship_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```python
left: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```python
right: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `left_input`<sup>Optional</sup> <a name="left_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```python
left_input: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationship_type_input`<sup>Optional</sup> <a name="relationship_type_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```python
relationship_type_input: str
```

- *Type:* str

---

##### `right_input`<sup>Optional</sup> <a name="right_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```python
right_input: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `relationship_type`<sup>Required</sup> <a name="relationship_type" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls">put_example_question_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs">put_join_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions">put_sql_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets">put_sql_snippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions">put_text_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls">reset_example_question_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs">reset_join_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions">reset_sql_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets">reset_sql_snippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions">reset_text_instructions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example_question_sqls` <a name="put_example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```python
def put_example_question_sqls(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]

---

##### `put_join_specs` <a name="put_join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```python
def put_join_specs(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]

---

##### `put_sql_functions` <a name="put_sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```python
def put_sql_functions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]

---

##### `put_sql_snippets` <a name="put_sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```python
def put_sql_snippets(
  expressions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions] = None,
  filters: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters] = None,
  measures: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures] = None
) -> None
```

###### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets.parameter.expressions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}.

---

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}.

---

###### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putSqlSnippets.parameter.measures"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}.

---

##### `put_text_instructions` <a name="put_text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions"></a>

```python
def put_text_instructions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]

---

##### `reset_example_question_sqls` <a name="reset_example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```python
def reset_example_question_sqls() -> None
```

##### `reset_join_specs` <a name="reset_join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```python
def reset_join_specs() -> None
```

##### `reset_sql_functions` <a name="reset_sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```python
def reset_sql_functions() -> None
```

##### `reset_sql_snippets` <a name="reset_sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```python
def reset_sql_snippets() -> None
```

##### `reset_text_instructions` <a name="reset_text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```python
def reset_text_instructions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls">example_question_sqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs">join_specs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions">sql_functions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets">sql_snippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions">text_instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">example_question_sqls_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput">join_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sql_functions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sql_snippets_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput">text_instructions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example_question_sqls`<sup>Required</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```python
example_question_sqls: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `join_specs`<sup>Required</sup> <a name="join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```python
join_specs: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList</a>

---

##### `sql_functions`<sup>Required</sup> <a name="sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```python
sql_functions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList</a>

---

##### `sql_snippets`<sup>Required</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```python
sql_snippets: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `text_instructions`<sup>Required</sup> <a name="text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructions"></a>

```python
text_instructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList</a>

---

##### `example_question_sqls_input`<sup>Optional</sup> <a name="example_question_sqls_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```python
example_question_sqls_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]

---

##### `join_specs_input`<sup>Optional</sup> <a name="join_specs_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```python
join_specs_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]

---

##### `sql_functions_input`<sup>Optional</sup> <a name="sql_functions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```python
sql_functions_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]

---

##### `sql_snippets_input`<sup>Optional</sup> <a name="sql_snippets_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```python
sql_snippets_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---

##### `text_instructions_input`<sup>Optional</sup> <a name="text_instructions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```python
text_instructions_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">put_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">put_measures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">reset_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">reset_measures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expressions` <a name="put_expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```python
def put_expressions(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]

---

##### `put_measures` <a name="put_measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```python
def put_measures(
  value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]

---

##### `reset_expressions` <a name="reset_expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```python
def reset_expressions() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_measures` <a name="reset_measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```python
def reset_measures() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measures_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```python
expressions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```python
filters: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```python
measures: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressions_input`<sup>Optional</sup> <a name="expressions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```python
expressions_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions</a>]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters</a>]

---

##### `measures_input`<sup>Optional</sup> <a name="measures_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```python
measures_input: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>

---


### DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks">put_benchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources">put_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions">put_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks">reset_benchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources">reset_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions">reset_instructions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_benchmarks` <a name="put_benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks"></a>

```python
def put_benchmarks(
  questions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions] = None
) -> None
```

###### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putBenchmarks.parameter.questions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}.

---

##### `put_config` <a name="put_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig"></a>

```python
def put_config(
  sample_questions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions] = None
) -> None
```

###### `sample_questions`<sup>Optional</sup> <a name="sample_questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putConfig.parameter.sampleQuestions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}.

---

##### `put_data_sources` <a name="put_data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources"></a>

```python
def put_data_sources(
  mcp_connections: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections] = None,
  tables: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables] = None,
  volumes: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes] = None
) -> None
```

###### `mcp_connections`<sup>Optional</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources.parameter.mcpConnections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}.

---

###### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources.parameter.tables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}.

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putDataSources.parameter.volumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}.

---

##### `put_instructions` <a name="put_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions"></a>

```python
def put_instructions(
  example_question_sqls: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls] = None,
  join_specs: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs] = None,
  sql_functions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions] = None,
  sql_snippets: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets = None,
  text_instructions: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions] = None
) -> None
```

###### `example_question_sqls`<sup>Optional</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.exampleQuestionSqls"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}.

---

###### `join_specs`<sup>Optional</sup> <a name="join_specs" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.joinSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}.

---

###### `sql_functions`<sup>Optional</sup> <a name="sql_functions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.sqlFunctions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}.

---

###### `sql_snippets`<sup>Optional</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.sqlSnippets"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}.

---

###### `text_instructions`<sup>Optional</sup> <a name="text_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.putInstructions.parameter.textInstructions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}.

---

##### `reset_benchmarks` <a name="reset_benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetBenchmarks"></a>

```python
def reset_benchmarks() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_data_sources` <a name="reset_data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetDataSources"></a>

```python
def reset_data_sources() -> None
```

##### `reset_instructions` <a name="reset_instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.resetInstructions"></a>

```python
def reset_instructions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput">benchmarks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput">data_sources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput">instructions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarks"></a>

```python
benchmarks: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.config"></a>

```python
config: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference</a>

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSources"></a>

```python
data_sources: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructions"></a>

```python
instructions: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference</a>

---

##### `benchmarks_input`<sup>Optional</sup> <a name="benchmarks_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.benchmarksInput"></a>

```python
benchmarks_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks">DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.configInput"></a>

```python
config_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionConfig">DataDatabricksGenieAgentsGenieAgentsDefinitionConfig</a>

---

##### `data_sources_input`<sup>Optional</sup> <a name="data_sources_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.dataSourcesInput"></a>

```python
data_sources_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources">DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources</a>

---

##### `instructions_input`<sup>Optional</sup> <a name="instructions_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.instructionsInput"></a>

```python
instructions_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions">DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentsGenieAgentsDefinition
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinition">DataDatabricksGenieAgentsGenieAgentsDefinition</a>

---


### DataDatabricksGenieAgentsGenieAgentsList <a name="DataDatabricksGenieAgentsGenieAgentsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksGenieAgentsGenieAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksGenieAgentsGenieAgents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>]

---


### DataDatabricksGenieAgentsGenieAgentsOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath">effective_parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.definition"></a>

```python
definition: DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference">DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_parent_path`<sup>Required</sup> <a name="effective_parent_path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.effectiveParentPath"></a>

```python
effective_parent_path: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference">DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksGenieAgentsGenieAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksGenieAgentsGenieAgents
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgents">DataDatabricksGenieAgentsGenieAgents</a>

---


### DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsGenieAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsGenieAgentsProviderConfig">DataDatabricksGenieAgentsGenieAgentsProviderConfig</a>

---


### DataDatabricksGenieAgentsProviderConfigOutputReference <a name="DataDatabricksGenieAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_genie_agents

dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksGenieAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgents.DataDatabricksGenieAgentsProviderConfig">DataDatabricksGenieAgentsProviderConfig</a>

---



