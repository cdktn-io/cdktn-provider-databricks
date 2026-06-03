# `entityTagAssignment` Submodule <a name="`entityTagAssignment` Submodule" id="@cdktn/provider-databricks.entityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityTagAssignment <a name="EntityTagAssignment" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment databricks_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_name: str,
  entity_type: str,
  tag_key: str,
  provider_config: EntityTagAssignmentProviderConfig = None,
  tag_value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityName">entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#workspace_id EntityTagAssignment#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.resetTagValue"></a>

```python
def reset_tag_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EntityTagAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isConstruct"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformResource"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EntityTagAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EntityTagAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference">EntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfig"></a>

```python
provider_config: EntityTagAssignmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference">EntityTagAssignmentProviderConfigOutputReference</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | EntityTagAssignmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntityTagAssignmentConfig <a name="EntityTagAssignmentConfig" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_name: str,
  entity_type: str,
  tag_key: str,
  provider_config: EntityTagAssignmentProviderConfig = None,
  tag_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityName">entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.providerConfig"></a>

```python
provider_config: EntityTagAssignmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}.

---

### EntityTagAssignmentProviderConfig <a name="EntityTagAssignmentProviderConfig" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignmentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#workspace_id EntityTagAssignment#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/entity_tag_assignment#workspace_id EntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EntityTagAssignmentProviderConfigOutputReference <a name="EntityTagAssignmentProviderConfigOutputReference" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import entity_tag_assignment

entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityTagAssignmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

---



