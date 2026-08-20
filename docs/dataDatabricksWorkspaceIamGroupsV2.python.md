# `dataDatabricksWorkspaceIamGroupsV2` Submodule <a name="`dataDatabricksWorkspaceIamGroupsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceIamGroupsV2 <a name="DataDatabricksWorkspaceIamGroupsV2" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2 databricks_workspace_iam_groups_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWorkspaceIamGroupsV2ProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#filter DataDatabricksWorkspaceIamGroupsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#page_size DataDatabricksWorkspaceIamGroupsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#provider_config DataDatabricksWorkspaceIamGroupsV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#filter DataDatabricksWorkspaceIamGroupsV2#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#page_size DataDatabricksWorkspaceIamGroupsV2#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#provider_config DataDatabricksWorkspaceIamGroupsV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#workspace_id DataDatabricksWorkspaceIamGroupsV2#workspace_id}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceIamGroupsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksWorkspaceIamGroupsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksWorkspaceIamGroupsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksWorkspaceIamGroupsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceIamGroupsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList">DataDatabricksWorkspaceIamGroupsV2GroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.groups"></a>

```python
groups: DataDatabricksWorkspaceIamGroupsV2GroupsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList">DataDatabricksWorkspaceIamGroupsV2GroupsList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference">DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceIamGroupsV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceIamGroupsV2Config <a name="DataDatabricksWorkspaceIamGroupsV2Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWorkspaceIamGroupsV2ProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#filter DataDatabricksWorkspaceIamGroupsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#page_size DataDatabricksWorkspaceIamGroupsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#provider_config DataDatabricksWorkspaceIamGroupsV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#filter DataDatabricksWorkspaceIamGroupsV2#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#page_size DataDatabricksWorkspaceIamGroupsV2#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Config.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamGroupsV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#provider_config DataDatabricksWorkspaceIamGroupsV2#provider_config}.

---

### DataDatabricksWorkspaceIamGroupsV2Groups <a name="DataDatabricksWorkspaceIamGroupsV2Groups" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups(
  group_id: str,
  provider_config: DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#group_id DataDatabricksWorkspaceIamGroupsV2#group_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#provider_config DataDatabricksWorkspaceIamGroupsV2#provider_config}. |

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#group_id DataDatabricksWorkspaceIamGroupsV2#group_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#provider_config DataDatabricksWorkspaceIamGroupsV2#provider_config}.

---

### DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig <a name="DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#workspace_id DataDatabricksWorkspaceIamGroupsV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#workspace_id DataDatabricksWorkspaceIamGroupsV2#workspace_id}.

---

### DataDatabricksWorkspaceIamGroupsV2ProviderConfig <a name="DataDatabricksWorkspaceIamGroupsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#workspace_id DataDatabricksWorkspaceIamGroupsV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#workspace_id DataDatabricksWorkspaceIamGroupsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceIamGroupsV2GroupsList <a name="DataDatabricksWorkspaceIamGroupsV2GroupsList" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups">DataDatabricksWorkspaceIamGroupsV2Groups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksWorkspaceIamGroupsV2Groups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups">DataDatabricksWorkspaceIamGroupsV2Groups</a>]

---


### DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference <a name="DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/workspace_iam_groups_v2#workspace_id DataDatabricksWorkspaceIamGroupsV2#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups">DataDatabricksWorkspaceIamGroupsV2Groups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig</a>

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksWorkspaceIamGroupsV2Groups
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2Groups">DataDatabricksWorkspaceIamGroupsV2Groups</a>

---


### DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig">DataDatabricksWorkspaceIamGroupsV2GroupsProviderConfig</a>

---


### DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference <a name="DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_workspace_iam_groups_v2

dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWorkspaceIamGroupsV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceIamGroupsV2.DataDatabricksWorkspaceIamGroupsV2ProviderConfig">DataDatabricksWorkspaceIamGroupsV2ProviderConfig</a>

---



