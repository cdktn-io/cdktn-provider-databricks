# `dataDatabricksEntityTagAssignments` Submodule <a name="`dataDatabricksEntityTagAssignments` Submodule" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEntityTagAssignments <a name="DataDatabricksEntityTagAssignments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments databricks_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments(
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
  max_results: typing.Union[int, float] = None,
  provider_config: DataDatabricksEntityTagAssignmentsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityName">entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#max_results DataDatabricksEntityTagAssignments#max_results}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `max_results`<sup>Optional</sup> <a name="max_results" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.maxResults"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#max_results DataDatabricksEntityTagAssignments#max_results}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetMaxResults">reset_max_results</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

##### `reset_max_results` <a name="reset_max_results" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetMaxResults"></a>

```python
def reset_max_results() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksEntityTagAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments">tag_assignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResultsInput">max_results_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfig"></a>

```python
provider_config: DataDatabricksEntityTagAssignmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsProviderConfigOutputReference</a>

---

##### `tag_assignments`<sup>Required</sup> <a name="tag_assignments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments"></a>

```python
tag_assignments: DataDatabricksEntityTagAssignmentsTagAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a>

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `max_results_input`<sup>Optional</sup> <a name="max_results_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResultsInput"></a>

```python
max_results_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksEntityTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `max_results`<sup>Required</sup> <a name="max_results" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEntityTagAssignmentsConfig <a name="DataDatabricksEntityTagAssignmentsConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_name: str,
  entity_type: str,
  max_results: typing.Union[int, float] = None,
  provider_config: DataDatabricksEntityTagAssignmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName">entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#max_results DataDatabricksEntityTagAssignments#max_results}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `max_results`<sup>Optional</sup> <a name="max_results" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#max_results DataDatabricksEntityTagAssignments#max_results}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksEntityTagAssignmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}.

---

### DataDatabricksEntityTagAssignmentsProviderConfig <a name="DataDatabricksEntityTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

### DataDatabricksEntityTagAssignmentsTagAssignments <a name="DataDatabricksEntityTagAssignmentsTagAssignments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments(
  entity_name: str,
  entity_type: str,
  tag_key: str,
  provider_config: DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName">entity_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}. |

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.providerConfig"></a>

```python
provider_config: DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}.

---

### DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEntityTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksEntityTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksEntityTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksEntityTagAssignmentsTagAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>]

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksEntityTagAssignmentsTagAssignments
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_entity_tag_assignments

dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---



