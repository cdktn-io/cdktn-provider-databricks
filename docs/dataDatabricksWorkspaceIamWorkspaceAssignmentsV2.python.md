# `dataDatabricksWorkspaceIamWorkspaceAssignmentsV2` Submodule <a name="`dataDatabricksWorkspaceIamWorkspaceAssignmentsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2 databricks_workspace_iam_workspace_assignments_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#page_size DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#page_size DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.workspaceAssignments">workspace_assignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference</a>

---

##### `workspace_assignments`<sup>Required</sup> <a name="workspace_assignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.workspaceAssignments"></a>

```python
workspace_assignments: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#page_size DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#page_size DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}.

---

### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}.

---

### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments(
  principal_id: typing.Union[int, float],
  provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#principal_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}. |

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#principal_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#principal_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}.

---

### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig</a>

---


### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments</a>]

---


### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements">effective_entitlements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements">entitlements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `effective_entitlements`<sup>Required</sup> <a name="effective_entitlements" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements"></a>

```python
effective_entitlements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements"></a>

```python
entitlements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput"></a>

```python
principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig</a>

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments</a>

---


### DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_workspace_assignments_v2

dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamWorkspaceAssignmentsV2.DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig">DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig</a>

---



