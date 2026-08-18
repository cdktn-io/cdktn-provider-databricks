# `dataDatabricksSupervisorAgents` Submodule <a name="`dataDatabricksSupervisorAgents` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgents <a name="DataDatabricksSupervisorAgents" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents databricks_supervisor_agents}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents(
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
  provider_config: DataDatabricksSupervisorAgentsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#page_size DataDatabricksSupervisorAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#page_size DataDatabricksSupervisorAgents#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgents resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSupervisorAgents to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSupervisorAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.supervisorAgents">supervisor_agents</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList">DataDatabricksSupervisorAgentsSupervisorAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsProviderConfigOutputReference</a>

---

##### `supervisor_agents`<sup>Required</sup> <a name="supervisor_agents" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.supervisorAgents"></a>

```python
supervisor_agents: DataDatabricksSupervisorAgentsSupervisorAgentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList">DataDatabricksSupervisorAgentsSupervisorAgentsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksSupervisorAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentsConfig <a name="DataDatabricksSupervisorAgentsConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksSupervisorAgentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#page_size DataDatabricksSupervisorAgents#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#page_size DataDatabricksSupervisorAgents#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}.

---

### DataDatabricksSupervisorAgentsProviderConfig <a name="DataDatabricksSupervisorAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}.

---

### DataDatabricksSupervisorAgentsSupervisorAgents <a name="DataDatabricksSupervisorAgentsSupervisorAgents" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents(
  name: str,
  provider_config: DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#name DataDatabricksSupervisorAgents#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#name DataDatabricksSupervisorAgents#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}.

---

### DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig <a name="DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSupervisorAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a>

---


### DataDatabricksSupervisorAgentsSupervisorAgentsList <a name="DataDatabricksSupervisorAgentsSupervisorAgentsList" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents">DataDatabricksSupervisorAgentsSupervisorAgents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSupervisorAgentsSupervisorAgents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents">DataDatabricksSupervisorAgentsSupervisorAgents</a>]

---


### DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference <a name="DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.supervisorAgentId">supervisor_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents">DataDatabricksSupervisorAgentsSupervisorAgents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference</a>

---

##### `supervisor_agent_id`<sup>Required</sup> <a name="supervisor_agent_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.supervisorAgentId"></a>

```python
supervisor_agent_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentsSupervisorAgents
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents">DataDatabricksSupervisorAgentsSupervisorAgents</a>

---


### DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agents

dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a>

---



