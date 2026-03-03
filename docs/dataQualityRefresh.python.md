# `dataQualityRefresh` Submodule <a name="`dataQualityRefresh` Submodule" id="@cdktn/provider-databricks.dataQualityRefresh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataQualityRefresh <a name="DataQualityRefresh" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh databricks_data_quality_refresh}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefresh(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str,
  provider_config: DataQualityRefreshProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#provider_config DataQualityRefresh#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#provider_config DataQualityRefresh#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#workspace_id DataQualityRefresh#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataQualityRefresh resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isConstruct"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefresh.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefresh.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformResource"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefresh.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefresh.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataQualityRefresh resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataQualityRefresh to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataQualityRefresh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataQualityRefresh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.endTimeMs">end_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference">DataQualityRefreshProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.refreshId">refresh_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.startTimeMs">start_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_time_ms`<sup>Required</sup> <a name="end_time_ms" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.endTimeMs"></a>

```python
end_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.providerConfig"></a>

```python
provider_config: DataQualityRefreshProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference">DataQualityRefreshProviderConfigOutputReference</a>

---

##### `refresh_id`<sup>Required</sup> <a name="refresh_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.refreshId"></a>

```python
refresh_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_ms`<sup>Required</sup> <a name="start_time_ms" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.startTimeMs"></a>

```python
start_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataQualityRefreshProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a>

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefresh.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataQualityRefreshConfig <a name="DataQualityRefreshConfig" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefreshConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str,
  provider_config: DataQualityRefreshProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#provider_config DataQualityRefresh#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshConfig.property.providerConfig"></a>

```python
provider_config: DataQualityRefreshProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#provider_config DataQualityRefresh#provider_config}.

---

### DataQualityRefreshProviderConfig <a name="DataQualityRefreshProviderConfig" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefreshProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#workspace_id DataQualityRefresh#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/data_quality_refresh#workspace_id DataQualityRefresh#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataQualityRefreshProviderConfigOutputReference <a name="DataQualityRefreshProviderConfigOutputReference" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_quality_refresh

dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataQualityRefreshProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataQualityRefresh.DataQualityRefreshProviderConfig">DataQualityRefreshProviderConfig</a>

---



