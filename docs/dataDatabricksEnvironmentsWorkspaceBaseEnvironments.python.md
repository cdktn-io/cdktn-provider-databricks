# `dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule <a name="`dataDatabricksEnvironmentsWorkspaceBaseEnvironments` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments databricks_environments_workspace_base_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments(
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
  provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsWorkspaceBaseEnvironments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksEnvironmentsWorkspaceBaseEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsWorkspaceBaseEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments">workspace_base_environments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```python
provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `workspace_base_environments`<sup>Required</sup> <a name="workspace_base_environments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.workspaceBaseEnvironments"></a>

```python
workspace_base_environments: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#page_size DataDatabricksEnvironmentsWorkspaceBaseEnvironments#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments(
  name: str,
  provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#name DataDatabricksEnvironmentsWorkspaceBaseEnvironments#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments.property.providerConfig"></a>

```python
provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#provider_config DataDatabricksEnvironmentsWorkspaceBaseEnvironments#provider_config}.

---

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>]

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/environments_workspace_base_environments#workspace_id DataDatabricksEnvironmentsWorkspaceBaseEnvironments#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType">base_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId">creator_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType">effective_base_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath">filepath</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId">last_updated_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_environment_type`<sup>Required</sup> <a name="base_environment_type" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.baseEnvironmentType"></a>

```python
base_environment_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_user_id`<sup>Required</sup> <a name="creator_user_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.creatorUserId"></a>

```python
creator_user_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_base_environment_type`<sup>Required</sup> <a name="effective_base_environment_type" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.effectiveBaseEnvironmentType"></a>

```python
effective_base_environment_type: str
```

- *Type:* str

---

##### `filepath`<sup>Required</sup> <a name="filepath" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.filepath"></a>

```python
filepath: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_updated_user_id`<sup>Required</sup> <a name="last_updated_user_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.lastUpdatedUserId"></a>

```python
last_updated_user_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironments</a>

---


### DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference <a name="DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_workspace_base_environments

dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsWorkspaceBaseEnvironments.DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig">DataDatabricksEnvironmentsWorkspaceBaseEnvironmentsWorkspaceBaseEnvironmentsProviderConfig</a>

---



