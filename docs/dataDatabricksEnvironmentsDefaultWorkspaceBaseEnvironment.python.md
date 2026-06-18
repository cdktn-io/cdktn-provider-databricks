# `dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment` Submodule <a name="`dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment(
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
  provider_config: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#name DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#provider_config DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#name DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#provider_config DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#workspace_id DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment">cpu_workspace_base_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment">gpu_workspace_base_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cpu_workspace_base_environment`<sup>Required</sup> <a name="cpu_workspace_base_environment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment"></a>

```python
cpu_workspace_base_environment: str
```

- *Type:* str

---

##### `gpu_workspace_base_environment`<sup>Required</sup> <a name="gpu_workspace_base_environment" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment"></a>

```python
gpu_workspace_base_environment: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig"></a>

```python
provider_config: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#name DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#provider_config DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#name DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#provider_config DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#workspace_id DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/environments_default_workspace_base_environment#workspace_id DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_environments_default_workspace_base_environment

dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironment.DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">DataDatabricksEnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---



