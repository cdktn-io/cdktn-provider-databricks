# `environmentsDefaultWorkspaceBaseEnvironment` Submodule <a name="`environmentsDefaultWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironment <a name="EnvironmentsDefaultWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment databricks_environments_default_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cpu_workspace_base_environment: str = None,
  gpu_workspace_base_environment: str = None,
  provider_config: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.cpuWorkspaceBaseEnvironment">cpu_workspace_base_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.gpuWorkspaceBaseEnvironment">gpu_workspace_base_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cpu_workspace_base_environment`<sup>Optional</sup> <a name="cpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.cpuWorkspaceBaseEnvironment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}.

---

##### `gpu_workspace_base_environment`<sup>Optional</sup> <a name="gpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.gpuWorkspaceBaseEnvironment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetCpuWorkspaceBaseEnvironment">reset_cpu_workspace_base_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetGpuWorkspaceBaseEnvironment">reset_gpu_workspace_base_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

##### `reset_cpu_workspace_base_environment` <a name="reset_cpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetCpuWorkspaceBaseEnvironment"></a>

```python
def reset_cpu_workspace_base_environment() -> None
```

##### `reset_gpu_workspace_base_environment` <a name="reset_gpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetGpuWorkspaceBaseEnvironment"></a>

```python
def reset_gpu_workspace_base_environment() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EnvironmentsDefaultWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnvironmentsDefaultWorkspaceBaseEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnvironmentsDefaultWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsDefaultWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironmentInput">cpu_workspace_base_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironmentInput">gpu_workspace_base_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment">cpu_workspace_base_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment">gpu_workspace_base_environment</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfig"></a>

```python
provider_config: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `cpu_workspace_base_environment_input`<sup>Optional</sup> <a name="cpu_workspace_base_environment_input" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironmentInput"></a>

```python
cpu_workspace_base_environment_input: str
```

- *Type:* str

---

##### `gpu_workspace_base_environment_input`<sup>Optional</sup> <a name="gpu_workspace_base_environment_input" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironmentInput"></a>

```python
gpu_workspace_base_environment_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `cpu_workspace_base_environment`<sup>Required</sup> <a name="cpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.cpuWorkspaceBaseEnvironment"></a>

```python
cpu_workspace_base_environment: str
```

- *Type:* str

---

##### `gpu_workspace_base_environment`<sup>Required</sup> <a name="gpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.gpuWorkspaceBaseEnvironment"></a>

```python
gpu_workspace_base_environment: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironmentConfig <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cpu_workspace_base_environment: str = None,
  gpu_workspace_base_environment: str = None,
  provider_config: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.cpuWorkspaceBaseEnvironment">cpu_workspace_base_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.gpuWorkspaceBaseEnvironment">gpu_workspace_base_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cpu_workspace_base_environment`<sup>Optional</sup> <a name="cpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.cpuWorkspaceBaseEnvironment"></a>

```python
cpu_workspace_base_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#cpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#cpu_workspace_base_environment}.

---

##### `gpu_workspace_base_environment`<sup>Optional</sup> <a name="gpu_workspace_base_environment" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.gpuWorkspaceBaseEnvironment"></a>

```python
gpu_workspace_base_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#gpu_workspace_base_environment EnvironmentsDefaultWorkspaceBaseEnvironment#gpu_workspace_base_environment}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```python
provider_config: EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#provider_config EnvironmentsDefaultWorkspaceBaseEnvironment#provider_config}.

---

### EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/environments_default_workspace_base_environment#workspace_id EnvironmentsDefaultWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import environments_default_workspace_base_environment

environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsDefaultWorkspaceBaseEnvironment.EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig">EnvironmentsDefaultWorkspaceBaseEnvironmentProviderConfig</a>

---



