# `dataDatabricksQualityMonitorV2` Submodule <a name="`dataDatabricksQualityMonitorV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorV2 <a name="DataDatabricksQualityMonitorV2" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2(
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
  provider_config: DataDatabricksQualityMonitorV2ProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksQualityMonitorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksQualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig">anomaly_detection_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference">DataDatabricksQualityMonitorV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.validityCheckConfigurations">validity_check_configurations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `anomaly_detection_config`<sup>Required</sup> <a name="anomaly_detection_config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig"></a>

```python
anomaly_detection_config: DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfig"></a>

```python
provider_config: DataDatabricksQualityMonitorV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference">DataDatabricksQualityMonitorV2ProviderConfigOutputReference</a>

---

##### `validity_check_configurations`<sup>Required</sup> <a name="validity_check_configurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.validityCheckConfigurations"></a>

```python
validity_check_configurations: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList</a>

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksQualityMonitorV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfig <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig(
  excluded_table_full_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames">excluded_table_full_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}. |

---

##### `excluded_table_full_names`<sup>Optional</sup> <a name="excluded_table_full_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.property.excludedTableFullNames"></a>

```python
excluded_table_full_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}.

---

### DataDatabricksQualityMonitorV2Config <a name="DataDatabricksQualityMonitorV2Config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str,
  provider_config: DataDatabricksQualityMonitorV2ProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.providerConfig"></a>

```python
provider_config: DataDatabricksQualityMonitorV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}.

---

### DataDatabricksQualityMonitorV2ProviderConfig <a name="DataDatabricksQualityMonitorV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurations <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurations" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations(
  name: str = None,
  percent_null_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck = None,
  range_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck = None,
  uniqueness_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck">percent_null_validity_check</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck">range_validity_check</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck">uniqueness_validity_check</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}.

---

##### `percent_null_validity_check`<sup>Optional</sup> <a name="percent_null_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.percentNullValidityCheck"></a>

```python
percent_null_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}.

---

##### `range_validity_check`<sup>Optional</sup> <a name="range_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.rangeValidityCheck"></a>

```python
range_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}.

---

##### `uniqueness_validity_check`<sup>Optional</sup> <a name="uniqueness_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations.property.uniquenessValidityCheck"></a>

```python
uniqueness_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck(
  column_names: typing.List[str] = None,
  upper_bound: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound">upper_bound</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}. |

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `upper_bound`<sup>Optional</sup> <a name="upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck.property.upperBound"></a>

```python
upper_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck(
  column_names: typing.List[str] = None,
  lower_bound: typing.Union[int, float] = None,
  upper_bound: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound">lower_bound</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound">upper_bound</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}. |

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `lower_bound`<sup>Optional</sup> <a name="lower_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.lowerBound"></a>

```python
lower_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}.

---

##### `upper_bound`<sup>Optional</sup> <a name="upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck.property.upperBound"></a>

```python
upper_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck(
  column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}. |

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">reset_excluded_table_full_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_table_full_names` <a name="reset_excluded_table_full_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```python
def reset_excluded_table_full_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">last_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">latest_run_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">excluded_table_full_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames">excluded_table_full_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_run_id`<sup>Required</sup> <a name="last_run_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```python
last_run_id: str
```

- *Type:* str

---

##### `latest_run_status`<sup>Required</sup> <a name="latest_run_status" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```python
latest_run_status: str
```

- *Type:* str

---

##### `excluded_table_full_names_input`<sup>Optional</sup> <a name="excluded_table_full_names_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```python
excluded_table_full_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_table_full_names`<sup>Required</sup> <a name="excluded_table_full_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```python
excluded_table_full_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksQualityMonitorV2AnomalyDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a>

---


### DataDatabricksQualityMonitorV2ProviderConfigOutputReference <a name="DataDatabricksQualityMonitorV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksQualityMonitorV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ProviderConfig">DataDatabricksQualityMonitorV2ProviderConfig</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksQualityMonitorV2ValidityCheckConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>]

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck">put_percent_null_validity_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck">put_range_validity_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck">put_uniqueness_validity_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck">reset_percent_null_validity_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck">reset_range_validity_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck">reset_uniqueness_validity_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_percent_null_validity_check` <a name="put_percent_null_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck"></a>

```python
def put_percent_null_validity_check(
  column_names: typing.List[str] = None,
  upper_bound: typing.Union[int, float] = None
) -> None
```

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

###### `upper_bound`<sup>Optional</sup> <a name="upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putPercentNullValidityCheck.parameter.upperBound"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

##### `put_range_validity_check` <a name="put_range_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck"></a>

```python
def put_range_validity_check(
  column_names: typing.List[str] = None,
  lower_bound: typing.Union[int, float] = None,
  upper_bound: typing.Union[int, float] = None
) -> None
```

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

###### `lower_bound`<sup>Optional</sup> <a name="lower_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.lowerBound"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}.

---

###### `upper_bound`<sup>Optional</sup> <a name="upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putRangeValidityCheck.parameter.upperBound"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}.

---

##### `put_uniqueness_validity_check` <a name="put_uniqueness_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck"></a>

```python
def put_uniqueness_validity_check(
  column_names: typing.List[str] = None
) -> None
```

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.putUniquenessValidityCheck.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}.

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_percent_null_validity_check` <a name="reset_percent_null_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetPercentNullValidityCheck"></a>

```python
def reset_percent_null_validity_check() -> None
```

##### `reset_range_validity_check` <a name="reset_range_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetRangeValidityCheck"></a>

```python
def reset_range_validity_check() -> None
```

##### `reset_uniqueness_validity_check` <a name="reset_uniqueness_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.resetUniquenessValidityCheck"></a>

```python
def reset_uniqueness_validity_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck">percent_null_validity_check</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck">range_validity_check</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck">uniqueness_validity_check</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput">percent_null_validity_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput">range_validity_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput">uniqueness_validity_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent_null_validity_check`<sup>Required</sup> <a name="percent_null_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheck"></a>

```python
percent_null_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference</a>

---

##### `range_validity_check`<sup>Required</sup> <a name="range_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheck"></a>

```python
range_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference</a>

---

##### `uniqueness_validity_check`<sup>Required</sup> <a name="uniqueness_validity_check" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheck"></a>

```python
uniqueness_validity_check: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `percent_null_validity_check_input`<sup>Optional</sup> <a name="percent_null_validity_check_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.percentNullValidityCheckInput"></a>

```python
percent_null_validity_check_input: IResolvable | DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---

##### `range_validity_check_input`<sup>Optional</sup> <a name="range_validity_check_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.rangeValidityCheckInput"></a>

```python
range_validity_check_input: IResolvable | DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---

##### `uniqueness_validity_check_input`<sup>Optional</sup> <a name="uniqueness_validity_check_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.uniquenessValidityCheckInput"></a>

```python
uniqueness_validity_check_input: IResolvable | DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksQualityMonitorV2ValidityCheckConfigurations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurations">DataDatabricksQualityMonitorV2ValidityCheckConfigurations</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound">reset_upper_bound</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_upper_bound` <a name="reset_upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.resetUpperBound"></a>

```python
def reset_upper_bound() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput">upper_bound_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound">upper_bound</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upper_bound_input`<sup>Optional</sup> <a name="upper_bound_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBoundInput"></a>

```python
upper_bound_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upper_bound`<sup>Required</sup> <a name="upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.upperBound"></a>

```python
upper_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound">reset_lower_bound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound">reset_upper_bound</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_lower_bound` <a name="reset_lower_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetLowerBound"></a>

```python
def reset_lower_bound() -> None
```

##### `reset_upper_bound` <a name="reset_upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.resetUpperBound"></a>

```python
def reset_upper_bound() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput">lower_bound_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput">upper_bound_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound">lower_bound</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound">upper_bound</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lower_bound_input`<sup>Optional</sup> <a name="lower_bound_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBoundInput"></a>

```python
lower_bound_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upper_bound_input`<sup>Optional</sup> <a name="upper_bound_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBoundInput"></a>

```python
upper_bound_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lower_bound`<sup>Required</sup> <a name="lower_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.lowerBound"></a>

```python
lower_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upper_bound`<sup>Required</sup> <a name="upper_bound" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.upperBound"></a>

```python
upper_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck</a>

---


### DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference <a name="DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_names` <a name="reset_column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck">DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck</a>

---



