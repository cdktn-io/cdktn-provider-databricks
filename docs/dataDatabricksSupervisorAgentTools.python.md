# `dataDatabricksSupervisorAgentTools` Submodule <a name="`dataDatabricksSupervisorAgentTools` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgentTools <a name="DataDatabricksSupervisorAgentTools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools databricks_supervisor_agent_tools}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksSupervisorAgentToolsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgentTools resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgentTools resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSupervisorAgentTools to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSupervisorAgentTools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgentTools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tools">tools</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList">DataDatabricksSupervisorAgentToolsToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentToolsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsProviderConfigOutputReference</a>

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tools"></a>

```python
tools: DataDatabricksSupervisorAgentToolsToolsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList">DataDatabricksSupervisorAgentToolsToolsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksSupervisorAgentToolsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentTools.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentToolsConfig <a name="DataDatabricksSupervisorAgentToolsConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksSupervisorAgentToolsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#parent DataDatabricksSupervisorAgentTools#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#page_size DataDatabricksSupervisorAgentTools#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentToolsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

### DataDatabricksSupervisorAgentToolsProviderConfig <a name="DataDatabricksSupervisorAgentToolsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

### DataDatabricksSupervisorAgentToolsTools <a name="DataDatabricksSupervisorAgentToolsTools" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools(
  name: str,
  provider_config: DataDatabricksSupervisorAgentToolsToolsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentToolsToolsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#provider_config DataDatabricksSupervisorAgentTools#provider_config}.

---

### DataDatabricksSupervisorAgentToolsToolsApp <a name="DataDatabricksSupervisorAgentToolsToolsApp" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsGenieSpace <a name="DataDatabricksSupervisorAgentToolsToolsGenieSpace" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#id DataDatabricksSupervisorAgentTools#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#id DataDatabricksSupervisorAgentTools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant <a name="DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant(
  knowledge_assistant_id: str,
  serving_endpoint_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.knowledgeAssistantId">knowledge_assistant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#knowledge_assistant_id DataDatabricksSupervisorAgentTools#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.servingEndpointName">serving_endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#serving_endpoint_name DataDatabricksSupervisorAgentTools#serving_endpoint_name}. |

---

##### `knowledge_assistant_id`<sup>Required</sup> <a name="knowledge_assistant_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.knowledgeAssistantId"></a>

```python
knowledge_assistant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#knowledge_assistant_id DataDatabricksSupervisorAgentTools#knowledge_assistant_id}.

---

##### `serving_endpoint_name`<sup>Optional</sup> <a name="serving_endpoint_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant.property.servingEndpointName"></a>

```python
serving_endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#serving_endpoint_name DataDatabricksSupervisorAgentTools#serving_endpoint_name}.

---

### DataDatabricksSupervisorAgentToolsToolsProviderConfig <a name="DataDatabricksSupervisorAgentToolsToolsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

### DataDatabricksSupervisorAgentToolsToolsUcConnection <a name="DataDatabricksSupervisorAgentToolsToolsUcConnection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsUcFunction <a name="DataDatabricksSupervisorAgentToolsToolsUcFunction" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

### DataDatabricksSupervisorAgentToolsToolsVolume <a name="DataDatabricksSupervisorAgentToolsToolsVolume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#name DataDatabricksSupervisorAgentTools#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentToolsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSupervisorAgentToolsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsProviderConfig">DataDatabricksSupervisorAgentToolsProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolsToolsAppOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp">DataDatabricksSupervisorAgentToolsToolsApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsToolsApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsApp">DataDatabricksSupervisorAgentToolsToolsApp</a>

---


### DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace">DataDatabricksSupervisorAgentToolsToolsGenieSpace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsToolsGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpace">DataDatabricksSupervisorAgentToolsToolsGenieSpace</a>

---


### DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resetServingEndpointName">reset_serving_endpoint_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_serving_endpoint_name` <a name="reset_serving_endpoint_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```python
def reset_serving_endpoint_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledge_assistant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointNameInput">serving_endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledge_assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointName">serving_endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `knowledge_assistant_id_input`<sup>Optional</sup> <a name="knowledge_assistant_id_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```python
knowledge_assistant_id_input: str
```

- *Type:* str

---

##### `serving_endpoint_name_input`<sup>Optional</sup> <a name="serving_endpoint_name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```python
serving_endpoint_name_input: str
```

- *Type:* str

---

##### `knowledge_assistant_id`<sup>Required</sup> <a name="knowledge_assistant_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```python
knowledge_assistant_id: str
```

- *Type:* str

---

##### `serving_endpoint_name`<sup>Required</sup> <a name="serving_endpoint_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```python
serving_endpoint_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistant</a>

---


### DataDatabricksSupervisorAgentToolsToolsList <a name="DataDatabricksSupervisorAgentToolsToolsList" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSupervisorAgentToolsToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSupervisorAgentToolsTools]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>]

---


### DataDatabricksSupervisorAgentToolsToolsOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/supervisor_agent_tools#workspace_id DataDatabricksSupervisorAgentTools#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference">DataDatabricksSupervisorAgentToolsToolsAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.knowledgeAssistant">knowledge_assistant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolType">tool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucConnection">uc_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucFunction">uc_function</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference">DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.app"></a>

```python
app: DataDatabricksSupervisorAgentToolsToolsAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsAppOutputReference">DataDatabricksSupervisorAgentToolsToolsAppOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `genie_space`<sup>Required</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.genieSpace"></a>

```python
genie_space: DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference">DataDatabricksSupervisorAgentToolsToolsGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_assistant`<sup>Required</sup> <a name="knowledge_assistant" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.knowledgeAssistant"></a>

```python
knowledge_assistant: DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference">DataDatabricksSupervisorAgentToolsToolsKnowledgeAssistantOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference">DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference</a>

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `tool_type`<sup>Required</sup> <a name="tool_type" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.toolType"></a>

```python
tool_type: str
```

- *Type:* str

---

##### `uc_connection`<sup>Required</sup> <a name="uc_connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucConnection"></a>

```python
uc_connection: DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference</a>

---

##### `uc_function`<sup>Required</sup> <a name="uc_function" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.ucFunction"></a>

```python
uc_function: DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference">DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.volume"></a>

```python
volume: DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference">DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksSupervisorAgentToolsToolsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsTools
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsTools">DataDatabricksSupervisorAgentToolsTools</a>

---


### DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSupervisorAgentToolsToolsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsProviderConfig">DataDatabricksSupervisorAgentToolsToolsProviderConfig</a>

---


### DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection">DataDatabricksSupervisorAgentToolsToolsUcConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsToolsUcConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcConnection">DataDatabricksSupervisorAgentToolsToolsUcConnection</a>

---


### DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction">DataDatabricksSupervisorAgentToolsToolsUcFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunctionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsToolsUcFunction
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsUcFunction">DataDatabricksSupervisorAgentToolsToolsUcFunction</a>

---


### DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference <a name="DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_supervisor_agent_tools

dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume">DataDatabricksSupervisorAgentToolsToolsVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolumeOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSupervisorAgentToolsToolsVolume
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgentTools.DataDatabricksSupervisorAgentToolsToolsVolume">DataDatabricksSupervisorAgentToolsToolsVolume</a>

---



