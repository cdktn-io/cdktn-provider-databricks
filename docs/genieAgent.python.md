# `genieAgent` Submodule <a name="`genieAgent` Submodule" id="@cdktn/provider-databricks.genieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenieAgent <a name="GenieAgent" id="@cdktn/provider-databricks.genieAgent.GenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  definition: GenieAgentDefinition,
  display_name: str,
  warehouse_id: str,
  description: str = None,
  genie_agent_id: str = None,
  parent_path: str = None,
  provider_config: GenieAgentProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.genieAgentId">genie_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `genie_agent_id`<sup>Optional</sup> <a name="genie_agent_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.genieAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}.

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.parentPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetGenieAgentId">reset_genie_agent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetParentPath">reset_parent_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.genieAgent.GenieAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.genieAgent.GenieAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.genieAgent.GenieAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_definition` <a name="put_definition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition"></a>

```python
def put_definition(
  benchmarks: GenieAgentDefinitionBenchmarks = None,
  config: GenieAgentDefinitionConfig = None,
  data_sources: GenieAgentDefinitionDataSources = None,
  instructions: GenieAgentDefinitionInstructions = None
) -> None
```

###### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition.parameter.benchmarks"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}.

---

###### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}.

---

###### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition.parameter.dataSources"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}.

---

###### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition.parameter.instructions"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_genie_agent_id` <a name="reset_genie_agent_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetGenieAgentId"></a>

```python
def reset_genie_agent_id() -> None
```

##### `reset_parent_path` <a name="reset_parent_path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetParentPath"></a>

```python
def reset_parent_path() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenieAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference">GenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.effectiveParentPath">effective_parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference">GenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.definitionInput">definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentIdInput">genie_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPathInput">parent_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentId">genie_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.definition"></a>

```python
definition: GenieAgentDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference">GenieAgentDefinitionOutputReference</a>

---

##### `effective_parent_path`<sup>Required</sup> <a name="effective_parent_path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.effectiveParentPath"></a>

```python
effective_parent_path: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfig"></a>

```python
provider_config: GenieAgentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference">GenieAgentProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.definitionInput"></a>

```python
definition_input: IResolvable | GenieAgentDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `genie_agent_id_input`<sup>Optional</sup> <a name="genie_agent_id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentIdInput"></a>

```python
genie_agent_id_input: str
```

- *Type:* str

---

##### `parent_path_input`<sup>Optional</sup> <a name="parent_path_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPathInput"></a>

```python
parent_path_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | GenieAgentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `genie_agent_id`<sup>Required</sup> <a name="genie_agent_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentId"></a>

```python
genie_agent_id: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenieAgentConfig <a name="GenieAgentConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  definition: GenieAgentDefinition,
  display_name: str,
  warehouse_id: str,
  description: str = None,
  genie_agent_id: str = None,
  parent_path: str = None,
  provider_config: GenieAgentProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.genieAgentId">genie_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.definition"></a>

```python
definition: GenieAgentDefinition
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `genie_agent_id`<sup>Optional</sup> <a name="genie_agent_id" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.genieAgentId"></a>

```python
genie_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}.

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.providerConfig"></a>

```python
provider_config: GenieAgentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}.

---

### GenieAgentDefinition <a name="GenieAgentDefinition" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinition(
  benchmarks: GenieAgentDefinitionBenchmarks = None,
  config: GenieAgentDefinitionConfig = None,
  data_sources: GenieAgentDefinitionDataSources = None,
  instructions: GenieAgentDefinitionInstructions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}. |

---

##### `benchmarks`<sup>Optional</sup> <a name="benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.benchmarks"></a>

```python
benchmarks: GenieAgentDefinitionBenchmarks
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.config"></a>

```python
config: GenieAgentDefinitionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}.

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.dataSources"></a>

```python
data_sources: GenieAgentDefinitionDataSources
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.instructions"></a>

```python
instructions: GenieAgentDefinitionInstructions
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}.

---

### GenieAgentDefinitionBenchmarks <a name="GenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarks(
  questions: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.property.questions">questions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}. |

---

##### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.property.questions"></a>

```python
questions: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}.

---

### GenieAgentDefinitionBenchmarksQuestions <a name="GenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksQuestions(
  id: str,
  question: str,
  answer: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestionsAnswer] = None,
  evaluation_note: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.answer">answer</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">evaluation_note</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

##### `answer`<sup>Optional</sup> <a name="answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```python
answer: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}.

---

##### `evaluation_note`<sup>Optional</sup> <a name="evaluation_note" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```python
evaluation_note: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}.

---

### GenieAgentDefinitionBenchmarksQuestionsAnswer <a name="GenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer(
  content: str,
  format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}.

---

### GenieAgentDefinitionConfig <a name="GenieAgentDefinitionConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionConfig(
  sample_questions: IResolvable | typing.List[GenieAgentDefinitionConfigSampleQuestions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.property.sampleQuestions">sample_questions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}. |

---

##### `sample_questions`<sup>Optional</sup> <a name="sample_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.property.sampleQuestions"></a>

```python
sample_questions: IResolvable | typing.List[GenieAgentDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}.

---

### GenieAgentDefinitionConfigSampleQuestions <a name="GenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionConfigSampleQuestions(
  id: str,
  question: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

### GenieAgentDefinitionDataSources <a name="GenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSources(
  mcp_connections: IResolvable | typing.List[GenieAgentDefinitionDataSourcesMcpConnections] = None,
  tables: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTables] = None,
  volumes: IResolvable | typing.List[GenieAgentDefinitionDataSourcesVolumes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.mcpConnections">mcp_connections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.tables">tables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}. |

---

##### `mcp_connections`<sup>Optional</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.mcpConnections"></a>

```python
mcp_connections: IResolvable | typing.List[GenieAgentDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}.

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.tables"></a>

```python
tables: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.volumes"></a>

```python
volumes: IResolvable | typing.List[GenieAgentDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}.

---

### GenieAgentDefinitionDataSourcesMcpConnections <a name="GenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesMcpConnections(
  mcp_connection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">mcp_connection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}. |

---

##### `mcp_connection`<sup>Required</sup> <a name="mcp_connection" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```python
mcp_connection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}.

---

### GenieAgentDefinitionDataSourcesTables <a name="GenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesTables(
  identifier: str,
  column_configs: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTablesColumnConfigs] = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.columnConfigs">column_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `column_configs`<sup>Optional</sup> <a name="column_configs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```python
column_configs: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

### GenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs(
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
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">enable_entity_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">enable_format_assistance</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">exclude</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```python
column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `enable_entity_matching`<sup>Optional</sup> <a name="enable_entity_matching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```python
enable_entity_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}.

---

##### `enable_format_assistance`<sup>Optional</sup> <a name="enable_format_assistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```python
enable_format_assistance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```python
exclude: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionDataSourcesVolumes <a name="GenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesVolumes(
  path: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

### GenieAgentDefinitionInstructions <a name="GenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructions(
  example_question_sqls: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqls] = None,
  join_specs: IResolvable | typing.List[GenieAgentDefinitionInstructionsJoinSpecs] = None,
  sql_functions: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlFunctions] = None,
  sql_snippets: GenieAgentDefinitionInstructionsSqlSnippets = None,
  text_instructions: IResolvable | typing.List[GenieAgentDefinitionInstructionsTextInstructions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.exampleQuestionSqls">example_question_sqls</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.joinSpecs">join_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlFunctions">sql_functions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlSnippets">sql_snippets</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.textInstructions">text_instructions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}. |

---

##### `example_question_sqls`<sup>Optional</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```python
example_question_sqls: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}.

---

##### `join_specs`<sup>Optional</sup> <a name="join_specs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.joinSpecs"></a>

```python
join_specs: IResolvable | typing.List[GenieAgentDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}.

---

##### `sql_functions`<sup>Optional</sup> <a name="sql_functions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```python
sql_functions: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}.

---

##### `sql_snippets`<sup>Optional</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```python
sql_snippets: GenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}.

---

##### `text_instructions`<sup>Optional</sup> <a name="text_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.textInstructions"></a>

```python
text_instructions: IResolvable | typing.List[GenieAgentDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqls <a name="GenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls(
  id: str,
  question: str,
  sql: str,
  parameters: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters] = None,
  usage_guidance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">question</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">usage_guidance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```python
question: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```python
parameters: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}.

---

##### `usage_guidance`<sup>Optional</sup> <a name="usage_guidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```python
usage_guidance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters(
  name: str,
  default_value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue = None,
  description: str = None,
  type_hint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">type_hint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```python
default_value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `type_hint`<sup>Optional</sup> <a name="type_hint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```python
type_hint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue(
  value_range: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}. |

---

##### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```python
value_range: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange(
  max: str = None,
  min: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">max</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">min</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```python
max: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```python
min: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}.

---

### GenieAgentDefinitionInstructionsJoinSpecs <a name="GenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecs(
  id: str,
  left: GenieAgentDefinitionInstructionsJoinSpecsLeft,
  right: GenieAgentDefinitionInstructionsJoinSpecsRight,
  sql: str,
  comment: str = None,
  instruction: str = None,
  relationship_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">relationship_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```python
left: GenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}.

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```python
right: GenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `relationship_type`<sup>Optional</sup> <a name="relationship_type" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}.

---

### GenieAgentDefinitionInstructionsJoinSpecsLeft <a name="GenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft(
  identifier: str,
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

### GenieAgentDefinitionInstructionsJoinSpecsRight <a name="GenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight(
  identifier: str,
  alias: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

### GenieAgentDefinitionInstructionsSqlFunctions <a name="GenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlFunctions(
  id: str,
  identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

### GenieAgentDefinitionInstructionsSqlSnippets <a name="GenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippets(
  expressions: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsExpressions] = None,
  filters: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsFilters] = None,
  measures: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsMeasures] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.expressions">expressions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.measures">measures</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}. |

---

##### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```python
expressions: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```python
filters: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}.

---

##### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```python
measures: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions(
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
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="GenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters(
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
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures(
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
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsTextInstructions <a name="GenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsTextInstructions(
  content: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GenieAgentProviderConfig <a name="GenieAgentProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenieAgentDefinitionBenchmarksOutputReference <a name="GenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions">put_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resetQuestions">reset_questions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_questions` <a name="put_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```python
def put_questions(
  value: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]

---

##### `reset_questions` <a name="reset_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```python
def reset_questions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questions">questions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList">GenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">questions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `questions`<sup>Required</sup> <a name="questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```python
questions: GenieAgentDefinitionBenchmarksQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList">GenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `questions_input`<sup>Optional</sup> <a name="questions_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```python
questions_input: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionBenchmarks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---


### GenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="GenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

---


### GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionBenchmarksQuestionsAnswer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>

---


### GenieAgentDefinitionBenchmarksQuestionsList <a name="GenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionBenchmarksQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]

---


### GenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="GenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">put_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">reset_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">reset_evaluation_note</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_answer` <a name="put_answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```python
def put_answer(
  value: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestionsAnswer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

---

##### `reset_answer` <a name="reset_answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```python
def reset_answer() -> None
```

##### `reset_evaluation_note` <a name="reset_evaluation_note" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```python
def reset_evaluation_note() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">answer</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList">GenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">answer_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">evaluation_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">evaluation_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `answer`<sup>Required</sup> <a name="answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```python
answer: GenieAgentDefinitionBenchmarksQuestionsAnswerList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList">GenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `answer_input`<sup>Optional</sup> <a name="answer_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```python
answer_input: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestionsAnswer]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>]

---

##### `evaluation_note_input`<sup>Optional</sup> <a name="evaluation_note_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```python
evaluation_note_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `evaluation_note`<sup>Required</sup> <a name="evaluation_note" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```python
evaluation_note: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionBenchmarksQuestions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>

---


### GenieAgentDefinitionConfigOutputReference <a name="GenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions">put_sample_questions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resetSampleQuestions">reset_sample_questions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sample_questions` <a name="put_sample_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```python
def put_sample_questions(
  value: IResolvable | typing.List[GenieAgentDefinitionConfigSampleQuestions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]

---

##### `reset_sample_questions` <a name="reset_sample_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```python
def reset_sample_questions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestions">sample_questions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList">GenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">sample_questions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sample_questions`<sup>Required</sup> <a name="sample_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```python
sample_questions: GenieAgentDefinitionConfigSampleQuestionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList">GenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `sample_questions_input`<sup>Optional</sup> <a name="sample_questions_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```python
sample_questions_input: IResolvable | typing.List[GenieAgentDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---


### GenieAgentDefinitionConfigSampleQuestionsList <a name="GenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionConfigSampleQuestionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionConfigSampleQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionConfigSampleQuestions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]

---


### GenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="GenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionConfigSampleQuestions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>

---


### GenieAgentDefinitionDataSourcesMcpConnectionsList <a name="GenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]

---


### GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">mcp_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">mcp_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_connection_input`<sup>Optional</sup> <a name="mcp_connection_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```python
mcp_connection_input: str
```

- *Type:* str

---

##### `mcp_connection`<sup>Required</sup> <a name="mcp_connection" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```python
mcp_connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionDataSourcesMcpConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>

---


### GenieAgentDefinitionDataSourcesOutputReference <a name="GenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">put_mcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables">put_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">reset_mcp_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetTables">reset_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mcp_connections` <a name="put_mcp_connections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```python
def put_mcp_connections(
  value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesMcpConnections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]

---

##### `put_tables` <a name="put_tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```python
def put_tables(
  value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]

---

##### `put_volumes` <a name="put_volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]

---

##### `reset_mcp_connections` <a name="reset_mcp_connections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```python
def reset_mcp_connections() -> None
```

##### `reset_tables` <a name="reset_tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```python
def reset_tables() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">mcp_connections</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList">GenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tables">tables</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList">GenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList">GenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">mcp_connections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">tables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcp_connections`<sup>Required</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```python
mcp_connections: GenieAgentDefinitionDataSourcesMcpConnectionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList">GenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```python
tables: GenieAgentDefinitionDataSourcesTablesList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList">GenieAgentDefinitionDataSourcesTablesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```python
volumes: GenieAgentDefinitionDataSourcesVolumesList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList">GenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `mcp_connections_input`<sup>Optional</sup> <a name="mcp_connections_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```python
mcp_connections_input: IResolvable | typing.List[GenieAgentDefinitionDataSourcesMcpConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```python
tables_input: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```python
volumes_input: IResolvable | typing.List[GenieAgentDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---


### GenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

---


### GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">reset_enable_entity_matching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">reset_enable_format_assistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_entity_matching` <a name="reset_enable_entity_matching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```python
def reset_enable_entity_matching() -> None
```

##### `reset_enable_format_assistance` <a name="reset_enable_format_assistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```python
def reset_enable_format_assistance() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">enable_entity_matching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">enable_format_assistance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">exclude_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">enable_entity_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">enable_format_assistance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">exclude</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_entity_matching_input`<sup>Optional</sup> <a name="enable_entity_matching_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```python
enable_entity_matching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_format_assistance_input`<sup>Optional</sup> <a name="enable_format_assistance_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```python
enable_format_assistance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```python
exclude_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_entity_matching`<sup>Required</sup> <a name="enable_entity_matching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```python
enable_entity_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_format_assistance`<sup>Required</sup> <a name="enable_format_assistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```python
enable_format_assistance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```python
exclude: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionDataSourcesTablesColumnConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>

---


### GenieAgentDefinitionDataSourcesTablesList <a name="GenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionDataSourcesTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]

---


### GenieAgentDefinitionDataSourcesTablesOutputReference <a name="GenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">put_column_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">reset_column_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_configs` <a name="put_column_configs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```python
def put_column_configs(
  value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTablesColumnConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

---

##### `reset_column_configs` <a name="reset_column_configs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```python
def reset_column_configs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">column_configs</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList">GenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">column_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_configs`<sup>Required</sup> <a name="column_configs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```python
column_configs: GenieAgentDefinitionDataSourcesTablesColumnConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList">GenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `column_configs_input`<sup>Optional</sup> <a name="column_configs_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```python
column_configs_input: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTablesColumnConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionDataSourcesTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>

---


### GenieAgentDefinitionDataSourcesVolumesList <a name="GenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionDataSourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionDataSourcesVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]

---


### GenieAgentDefinitionDataSourcesVolumesOutputReference <a name="GenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionDataSourcesVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">reset_usage_guidance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_usage_guidance` <a name="reset_usage_guidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```python
def reset_usage_guidance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">usage_guidance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">usage_guidance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```python
parameters: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---

##### `question_input`<sup>Optional</sup> <a name="question_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```python
question_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `usage_guidance_input`<sup>Optional</sup> <a name="usage_guidance_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```python
usage_guidance_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `question`<sup>Required</sup> <a name="question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```python
question: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `usage_guidance`<sup>Required</sup> <a name="usage_guidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```python
usage_guidance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqls
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">put_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">reset_value_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_range` <a name="put_value_range" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```python
def put_value_range(
  max: str = None,
  min: str = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.max"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.min"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}.

---

##### `reset_value_range` <a name="reset_value_range" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```python
def reset_value_range() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">value_range</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">value_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_range`<sup>Required</sup> <a name="value_range" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```python
value_range: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `value_range_input`<sup>Optional</sup> <a name="value_range_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```python
value_range_input: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```python
max_input: str
```

- *Type:* str

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```python
min_input: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```python
max: str
```

- *Type:* str

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```python
min: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>]

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">reset_type_hint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  value_range: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange = None,
  values: typing.List[str] = None
) -> None
```

###### `value_range`<sup>Optional</sup> <a name="value_range" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.valueRange"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}.

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type_hint` <a name="reset_type_hint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```python
def reset_type_hint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">type_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">type_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```python
default_value: GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_hint_input`<sup>Optional</sup> <a name="type_hint_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```python
type_hint_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type_hint`<sup>Required</sup> <a name="type_hint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```python
type_hint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsList <a name="GenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsJoinSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]

---


### GenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">put_left</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">put_right</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">reset_relationship_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left` <a name="put_left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```python
def put_left(
  identifier: str,
  alias: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `put_right` <a name="put_right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```python
def put_right(
  identifier: str,
  alias: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

###### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_relationship_type` <a name="reset_relationship_type" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```python
def reset_relationship_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">left_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">relationship_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">right_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">relationship_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```python
left: GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```python
right: GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `left_input`<sup>Optional</sup> <a name="left_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```python
left_input: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsLeft
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `relationship_type_input`<sup>Optional</sup> <a name="relationship_type_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```python
relationship_type_input: str
```

- *Type:* str

---

##### `right_input`<sup>Optional</sup> <a name="right_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```python
right_input: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `relationship_type`<sup>Required</sup> <a name="relationship_type" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```python
relationship_type: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsJoinSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">reset_alias</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsJoinSpecsRight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### GenieAgentDefinitionInstructionsOutputReference <a name="GenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">put_example_question_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">put_join_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">put_sql_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">put_sql_snippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions">put_text_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">reset_example_question_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">reset_join_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">reset_sql_functions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">reset_sql_snippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">reset_text_instructions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example_question_sqls` <a name="put_example_question_sqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```python
def put_example_question_sqls(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqls]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

---

##### `put_join_specs` <a name="put_join_specs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```python
def put_join_specs(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsJoinSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]

---

##### `put_sql_functions` <a name="put_sql_functions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```python
def put_sql_functions(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlFunctions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]

---

##### `put_sql_snippets` <a name="put_sql_snippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```python
def put_sql_snippets(
  expressions: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsExpressions] = None,
  filters: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsFilters] = None,
  measures: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsMeasures] = None
) -> None
```

###### `expressions`<sup>Optional</sup> <a name="expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.expressions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}.

---

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}.

---

###### `measures`<sup>Optional</sup> <a name="measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.measures"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}.

---

##### `put_text_instructions` <a name="put_text_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```python
def put_text_instructions(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsTextInstructions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]

---

##### `reset_example_question_sqls` <a name="reset_example_question_sqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```python
def reset_example_question_sqls() -> None
```

##### `reset_join_specs` <a name="reset_join_specs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```python
def reset_join_specs() -> None
```

##### `reset_sql_functions` <a name="reset_sql_functions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```python
def reset_sql_functions() -> None
```

##### `reset_sql_snippets` <a name="reset_sql_snippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```python
def reset_sql_snippets() -> None
```

##### `reset_text_instructions` <a name="reset_text_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```python
def reset_text_instructions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">example_question_sqls</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList">GenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">join_specs</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList">GenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">sql_functions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList">GenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">sql_snippets</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference">GenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructions">text_instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList">GenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">example_question_sqls_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">join_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">sql_functions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">sql_snippets_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">text_instructions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example_question_sqls`<sup>Required</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```python
example_question_sqls: GenieAgentDefinitionInstructionsExampleQuestionSqlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList">GenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `join_specs`<sup>Required</sup> <a name="join_specs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```python
join_specs: GenieAgentDefinitionInstructionsJoinSpecsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList">GenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `sql_functions`<sup>Required</sup> <a name="sql_functions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```python
sql_functions: GenieAgentDefinitionInstructionsSqlFunctionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList">GenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `sql_snippets`<sup>Required</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```python
sql_snippets: GenieAgentDefinitionInstructionsSqlSnippetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference">GenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `text_instructions`<sup>Required</sup> <a name="text_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```python
text_instructions: GenieAgentDefinitionInstructionsTextInstructionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList">GenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `example_question_sqls_input`<sup>Optional</sup> <a name="example_question_sqls_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```python
example_question_sqls_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

---

##### `join_specs_input`<sup>Optional</sup> <a name="join_specs_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```python
join_specs_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsJoinSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]

---

##### `sql_functions_input`<sup>Optional</sup> <a name="sql_functions_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```python
sql_functions_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]

---

##### `sql_snippets_input`<sup>Optional</sup> <a name="sql_snippets_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```python
sql_snippets_input: IResolvable | GenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `text_instructions_input`<sup>Optional</sup> <a name="text_instructions_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```python
text_instructions_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---


### GenieAgentDefinitionInstructionsSqlFunctionsList <a name="GenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsSqlFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlFunctions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]

---


### GenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="GenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsSqlFunctions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

---


### GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsExpressions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="GenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

---


### GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

---


### GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">reset_synonyms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_synonyms` <a name="reset_synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```python
def reset_synonyms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">synonyms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">synonyms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```python
instruction_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `synonyms_input`<sup>Optional</sup> <a name="synonyms_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```python
synonyms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```python
instruction: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```python
synonyms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippetsMeasures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">put_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">put_measures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">reset_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">reset_measures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expressions` <a name="put_expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```python
def put_expressions(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

---

##### `put_filters` <a name="put_filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```python
def put_filters(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

---

##### `put_measures` <a name="put_measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```python
def put_measures(
  value: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsMeasures]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

---

##### `reset_expressions` <a name="reset_expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```python
def reset_expressions() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_measures` <a name="reset_measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```python
def reset_measures() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">expressions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList">GenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">measures</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">expressions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">measures_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```python
expressions: GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```python
filters: GenieAgentDefinitionInstructionsSqlSnippetsFiltersList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList">GenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `measures`<sup>Required</sup> <a name="measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```python
measures: GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `expressions_input`<sup>Optional</sup> <a name="expressions_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```python
expressions_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>]

---

##### `measures_input`<sup>Optional</sup> <a name="measures_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```python
measures_input: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlSnippetsMeasures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsSqlSnippets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---


### GenieAgentDefinitionInstructionsTextInstructionsList <a name="GenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenieAgentDefinitionInstructionsTextInstructionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GenieAgentDefinitionInstructionsTextInstructions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]

---


### GenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="GenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinitionInstructionsTextInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>

---


### GenieAgentDefinitionOutputReference <a name="GenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks">put_benchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources">put_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions">put_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetBenchmarks">reset_benchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetDataSources">reset_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetInstructions">reset_instructions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_benchmarks` <a name="put_benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks"></a>

```python
def put_benchmarks(
  questions: IResolvable | typing.List[GenieAgentDefinitionBenchmarksQuestions] = None
) -> None
```

###### `questions`<sup>Optional</sup> <a name="questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks.parameter.questions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}.

---

##### `put_config` <a name="put_config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig"></a>

```python
def put_config(
  sample_questions: IResolvable | typing.List[GenieAgentDefinitionConfigSampleQuestions] = None
) -> None
```

###### `sample_questions`<sup>Optional</sup> <a name="sample_questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig.parameter.sampleQuestions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}.

---

##### `put_data_sources` <a name="put_data_sources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources"></a>

```python
def put_data_sources(
  mcp_connections: IResolvable | typing.List[GenieAgentDefinitionDataSourcesMcpConnections] = None,
  tables: IResolvable | typing.List[GenieAgentDefinitionDataSourcesTables] = None,
  volumes: IResolvable | typing.List[GenieAgentDefinitionDataSourcesVolumes] = None
) -> None
```

###### `mcp_connections`<sup>Optional</sup> <a name="mcp_connections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources.parameter.mcpConnections"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}.

---

###### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources.parameter.tables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}.

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources.parameter.volumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}.

---

##### `put_instructions` <a name="put_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions"></a>

```python
def put_instructions(
  example_question_sqls: IResolvable | typing.List[GenieAgentDefinitionInstructionsExampleQuestionSqls] = None,
  join_specs: IResolvable | typing.List[GenieAgentDefinitionInstructionsJoinSpecs] = None,
  sql_functions: IResolvable | typing.List[GenieAgentDefinitionInstructionsSqlFunctions] = None,
  sql_snippets: GenieAgentDefinitionInstructionsSqlSnippets = None,
  text_instructions: IResolvable | typing.List[GenieAgentDefinitionInstructionsTextInstructions] = None
) -> None
```

###### `example_question_sqls`<sup>Optional</sup> <a name="example_question_sqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.exampleQuestionSqls"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}.

---

###### `join_specs`<sup>Optional</sup> <a name="join_specs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.joinSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}.

---

###### `sql_functions`<sup>Optional</sup> <a name="sql_functions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.sqlFunctions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}.

---

###### `sql_snippets`<sup>Optional</sup> <a name="sql_snippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.sqlSnippets"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}.

---

###### `text_instructions`<sup>Optional</sup> <a name="text_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.textInstructions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}.

---

##### `reset_benchmarks` <a name="reset_benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```python
def reset_benchmarks() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_data_sources` <a name="reset_data_sources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetDataSources"></a>

```python
def reset_data_sources() -> None
```

##### `reset_instructions` <a name="reset_instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetInstructions"></a>

```python
def reset_instructions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarks">benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference">GenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference">GenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference">GenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructions">instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference">GenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarksInput">benchmarks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSourcesInput">data_sources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructionsInput">instructions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `benchmarks`<sup>Required</sup> <a name="benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarks"></a>

```python
benchmarks: GenieAgentDefinitionBenchmarksOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference">GenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.config"></a>

```python
config: GenieAgentDefinitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference">GenieAgentDefinitionConfigOutputReference</a>

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSources"></a>

```python
data_sources: GenieAgentDefinitionDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference">GenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructions"></a>

```python
instructions: GenieAgentDefinitionInstructionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference">GenieAgentDefinitionInstructionsOutputReference</a>

---

##### `benchmarks_input`<sup>Optional</sup> <a name="benchmarks_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```python
benchmarks_input: IResolvable | GenieAgentDefinitionBenchmarks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.configInput"></a>

```python
config_input: IResolvable | GenieAgentDefinitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---

##### `data_sources_input`<sup>Optional</sup> <a name="data_sources_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```python
data_sources_input: IResolvable | GenieAgentDefinitionDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---

##### `instructions_input`<sup>Optional</sup> <a name="instructions_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```python
instructions_input: IResolvable | GenieAgentDefinitionInstructions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---


### GenieAgentProviderConfigOutputReference <a name="GenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import genie_agent

genieAgent.GenieAgentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GenieAgentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---



