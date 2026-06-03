# `supervisorAgent` Submodule <a name="`supervisorAgent` Submodule" id="@cdktn/provider-databricks.supervisorAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupervisorAgent <a name="SupervisorAgent" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent databricks_supervisor_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgent(
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
  description: str = None,
  instructions: str = None,
  provider_config: SupervisorAgentProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#display_name SupervisorAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#description SupervisorAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.instructions">instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#instructions SupervisorAgent#instructions}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#provider_config SupervisorAgent#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#display_name SupervisorAgent#display_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#description SupervisorAgent#description}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.instructions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#instructions SupervisorAgent#instructions}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#provider_config SupervisorAgent#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetInstructions">reset_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#workspace_id SupervisorAgent#workspace_id}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instructions` <a name="reset_instructions" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetInstructions"></a>

```python
def reset_instructions() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SupervisorAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isConstruct"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isTerraformElement"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isTerraformResource"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SupervisorAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SupervisorAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SupervisorAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupervisorAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference">SupervisorAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.supervisorAgentId">supervisor_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.instructionsInput">instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.providerConfig"></a>

```python
provider_config: SupervisorAgentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference">SupervisorAgentProviderConfigOutputReference</a>

---

##### `supervisor_agent_id`<sup>Required</sup> <a name="supervisor_agent_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.supervisorAgentId"></a>

```python
supervisor_agent_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `instructions_input`<sup>Optional</sup> <a name="instructions_input" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.instructionsInput"></a>

```python
instructions_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | SupervisorAgentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorAgentConfig <a name="SupervisorAgentConfig" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  description: str = None,
  instructions: str = None,
  provider_config: SupervisorAgentProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#display_name SupervisorAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#description SupervisorAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.instructions">instructions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#instructions SupervisorAgent#instructions}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#provider_config SupervisorAgent#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#display_name SupervisorAgent#display_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#description SupervisorAgent#description}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#instructions SupervisorAgent#instructions}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentConfig.property.providerConfig"></a>

```python
provider_config: SupervisorAgentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#provider_config SupervisorAgent#provider_config}.

---

### SupervisorAgentProviderConfig <a name="SupervisorAgentProviderConfig" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#workspace_id SupervisorAgent#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/supervisor_agent#workspace_id SupervisorAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorAgentProviderConfigOutputReference <a name="SupervisorAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent

supervisorAgent.SupervisorAgentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgent.SupervisorAgentProviderConfig">SupervisorAgentProviderConfig</a>

---



