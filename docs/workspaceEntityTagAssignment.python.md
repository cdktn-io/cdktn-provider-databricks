# `workspaceEntityTagAssignment` Submodule <a name="`workspaceEntityTagAssignment` Submodule" id="@cdktn/provider-databricks.workspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceEntityTagAssignment <a name="WorkspaceEntityTagAssignment" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_id: str,
  entity_type: str,
  tag_key: str,
  provider_config: WorkspaceEntityTagAssignmentProviderConfig = None,
  tag_value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.tagValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#workspace_id WorkspaceEntityTagAssignment#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetTagValue"></a>

```python
def reset_tag_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceEntityTagAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference">WorkspaceEntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfig"></a>

```python
provider_config: WorkspaceEntityTagAssignmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference">WorkspaceEntityTagAssignmentProviderConfigOutputReference</a>

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | WorkspaceEntityTagAssignmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceEntityTagAssignmentConfig <a name="WorkspaceEntityTagAssignmentConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_id: str,
  entity_type: str,
  tag_key: str,
  provider_config: WorkspaceEntityTagAssignmentProviderConfig = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.providerConfig"></a>

```python
provider_config: WorkspaceEntityTagAssignmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#provider_config WorkspaceEntityTagAssignment#provider_config}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}.

---

### WorkspaceEntityTagAssignmentProviderConfig <a name="WorkspaceEntityTagAssignmentProviderConfig" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#workspace_id WorkspaceEntityTagAssignment#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/workspace_entity_tag_assignment#workspace_id WorkspaceEntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceEntityTagAssignmentProviderConfigOutputReference <a name="WorkspaceEntityTagAssignmentProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_entity_tag_assignment

workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceEntityTagAssignmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentProviderConfig">WorkspaceEntityTagAssignmentProviderConfig</a>

---



