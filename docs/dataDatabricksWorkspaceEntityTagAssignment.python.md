# `dataDatabricksWorkspaceEntityTagAssignment` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignment` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignment <a name="DataDatabricksWorkspaceEntityTagAssignment" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment(
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
  provider_config: DataDatabricksWorkspaceEntityTagAssignmentProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksWorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference</a>

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig(
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
  provider_config: DataDatabricksWorkspaceEntityTagAssignmentProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceEntityTagAssignmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignment

dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---



