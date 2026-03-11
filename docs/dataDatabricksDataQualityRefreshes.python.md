# `dataDatabricksDataQualityRefreshes` Submodule <a name="`dataDatabricksDataQualityRefreshes` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefreshes <a name="DataDatabricksDataQualityRefreshes" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes databricks_data_quality_refreshes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes(
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
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksDataQualityRefreshesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#provider_config DataDatabricksDataQualityRefreshes#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#provider_config DataDatabricksDataQualityRefreshes#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#workspace_id DataDatabricksDataQualityRefreshes#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityRefreshes resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDataQualityRefreshes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDataQualityRefreshes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDataQualityRefreshes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefreshes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference">DataDatabricksDataQualityRefreshesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.refreshes">refreshes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList">DataDatabricksDataQualityRefreshesRefreshesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.providerConfig"></a>

```python
provider_config: DataDatabricksDataQualityRefreshesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference">DataDatabricksDataQualityRefreshesProviderConfigOutputReference</a>

---

##### `refreshes`<sup>Required</sup> <a name="refreshes" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.refreshes"></a>

```python
refreshes: DataDatabricksDataQualityRefreshesRefreshesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList">DataDatabricksDataQualityRefreshesRefreshesList</a>

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksDataQualityRefreshesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a>

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshesConfig <a name="DataDatabricksDataQualityRefreshesConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksDataQualityRefreshesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#provider_config DataDatabricksDataQualityRefreshes#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksDataQualityRefreshesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#provider_config DataDatabricksDataQualityRefreshes#provider_config}.

---

### DataDatabricksDataQualityRefreshesProviderConfig <a name="DataDatabricksDataQualityRefreshesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#workspace_id DataDatabricksDataQualityRefreshes#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#workspace_id DataDatabricksDataQualityRefreshes#workspace_id}.

---

### DataDatabricksDataQualityRefreshesRefreshes <a name="DataDatabricksDataQualityRefreshesRefreshes" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes(
  object_id: str,
  object_type: str,
  refresh_id: typing.Union[int, float],
  provider_config: DataDatabricksDataQualityRefreshesRefreshesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.refreshId">refresh_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#refresh_id DataDatabricksDataQualityRefreshes#refresh_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig">DataDatabricksDataQualityRefreshesRefreshesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#provider_config DataDatabricksDataQualityRefreshes#provider_config}. |

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `refresh_id`<sup>Required</sup> <a name="refresh_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.refreshId"></a>

```python
refresh_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#refresh_id DataDatabricksDataQualityRefreshes#refresh_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.providerConfig"></a>

```python
provider_config: DataDatabricksDataQualityRefreshesRefreshesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig">DataDatabricksDataQualityRefreshesRefreshesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#provider_config DataDatabricksDataQualityRefreshes#provider_config}.

---

### DataDatabricksDataQualityRefreshesRefreshesProviderConfig <a name="DataDatabricksDataQualityRefreshesRefreshesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#workspace_id DataDatabricksDataQualityRefreshes#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#workspace_id DataDatabricksDataQualityRefreshes#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityRefreshesProviderConfigOutputReference <a name="DataDatabricksDataQualityRefreshesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityRefreshesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesProviderConfig">DataDatabricksDataQualityRefreshesProviderConfig</a>

---


### DataDatabricksDataQualityRefreshesRefreshesList <a name="DataDatabricksDataQualityRefreshesRefreshesList" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDataQualityRefreshesRefreshesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDataQualityRefreshesRefreshes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>]

---


### DataDatabricksDataQualityRefreshesRefreshesOutputReference <a name="DataDatabricksDataQualityRefreshesRefreshesOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/data_quality_refreshes#workspace_id DataDatabricksDataQualityRefreshes#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.endTimeMs">end_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference">DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.startTimeMs">start_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig">DataDatabricksDataQualityRefreshesRefreshesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshIdInput">refresh_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshId">refresh_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_ms`<sup>Required</sup> <a name="end_time_ms" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.endTimeMs"></a>

```python
end_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference">DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference</a>

---

##### `start_time_ms`<sup>Required</sup> <a name="start_time_ms" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.startTimeMs"></a>

```python
start_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksDataQualityRefreshesRefreshesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig">DataDatabricksDataQualityRefreshesRefreshesProviderConfig</a>

---

##### `refresh_id_input`<sup>Optional</sup> <a name="refresh_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshIdInput"></a>

```python
refresh_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `refresh_id`<sup>Required</sup> <a name="refresh_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshId"></a>

```python
refresh_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDataQualityRefreshesRefreshes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>

---


### DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference <a name="DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_refreshes

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig">DataDatabricksDataQualityRefreshesRefreshesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityRefreshesRefreshesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesProviderConfig">DataDatabricksDataQualityRefreshesRefreshesProviderConfig</a>

---



