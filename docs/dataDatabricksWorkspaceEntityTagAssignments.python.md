# `dataDatabricksWorkspaceEntityTagAssignments` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignments` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments databricks_workspace_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments(
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
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksWorkspaceEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments">tag_assignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference</a>

---

##### `tag_assignments`<sup>Required</sup> <a name="tag_assignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tagAssignments"></a>

```python
tag_assignments: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList</a>

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_id: str,
  entity_type: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#page_size DataDatabricksWorkspaceEntityTagAssignments#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments(
  entity_id: str,
  entity_type: str,
  tag_key: str,
  provider_config: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_id DataDatabricksWorkspaceEntityTagAssignments#entity_id}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#entity_type DataDatabricksWorkspaceEntityTagAssignments#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#tag_key DataDatabricksWorkspaceEntityTagAssignments#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#provider_config DataDatabricksWorkspaceEntityTagAssignments#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsProviderConfig</a>

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>]

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/workspace_entity_tag_assignments#workspace_id DataDatabricksWorkspaceEntityTagAssignments#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a>

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignments</a>

---


### DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_entity_tag_assignments

dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignments.DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---



