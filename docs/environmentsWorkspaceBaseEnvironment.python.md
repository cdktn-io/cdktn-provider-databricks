# `environmentsWorkspaceBaseEnvironment` Submodule <a name="`environmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsWorkspaceBaseEnvironment <a name="EnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  base_environment_type: str = None,
  filepath: str = None,
  provider_config: EnvironmentsWorkspaceBaseEnvironmentProviderConfig = None,
  workspace_base_environment_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.baseEnvironmentType">base_environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.filepath">filepath</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.workspaceBaseEnvironmentId">workspace_base_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `base_environment_type`<sup>Optional</sup> <a name="base_environment_type" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.baseEnvironmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.filepath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `workspace_base_environment_id`<sup>Optional</sup> <a name="workspace_base_environment_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.workspaceBaseEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType">reset_base_environment_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath">reset_filepath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId">reset_workspace_base_environment_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

##### `reset_base_environment_type` <a name="reset_base_environment_type" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType"></a>

```python
def reset_base_environment_type() -> None
```

##### `reset_filepath` <a name="reset_filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath"></a>

```python
def reset_filepath() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_workspace_base_environment_id` <a name="reset_workspace_base_environment_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId"></a>

```python
def reset_workspace_base_environment_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnvironmentsWorkspaceBaseEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">creator_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">effective_base_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">last_updated_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput">base_environment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput">filepath_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput">workspace_base_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">base_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath">filepath</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId">workspace_base_environment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_user_id`<sup>Required</sup> <a name="creator_user_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```python
creator_user_id: str
```

- *Type:* str

---

##### `effective_base_environment_type`<sup>Required</sup> <a name="effective_base_environment_type" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```python
effective_base_environment_type: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_updated_user_id`<sup>Required</sup> <a name="last_updated_user_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```python
last_updated_user_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```python
provider_config: EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `base_environment_type_input`<sup>Optional</sup> <a name="base_environment_type_input" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput"></a>

```python
base_environment_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filepath_input`<sup>Optional</sup> <a name="filepath_input" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput"></a>

```python
filepath_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | EnvironmentsWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `workspace_base_environment_id_input`<sup>Optional</sup> <a name="workspace_base_environment_id_input" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput"></a>

```python
workspace_base_environment_id_input: str
```

- *Type:* str

---

##### `base_environment_type`<sup>Required</sup> <a name="base_environment_type" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```python
base_environment_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `filepath`<sup>Required</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```python
filepath: str
```

- *Type:* str

---

##### `workspace_base_environment_id`<sup>Required</sup> <a name="workspace_base_environment_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId"></a>

```python
workspace_base_environment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsWorkspaceBaseEnvironmentConfig <a name="EnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  base_environment_type: str = None,
  filepath: str = None,
  provider_config: EnvironmentsWorkspaceBaseEnvironmentProviderConfig = None,
  workspace_base_environment_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType">base_environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath">filepath</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId">workspace_base_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `base_environment_type`<sup>Optional</sup> <a name="base_environment_type" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType"></a>

```python
base_environment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath"></a>

```python
filepath: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```python
provider_config: EnvironmentsWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `workspace_base_environment_id`<sup>Optional</sup> <a name="workspace_base_environment_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId"></a>

```python
workspace_base_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import environments_workspace_base_environment

environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EnvironmentsWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---



