# `dataDatabricksDataQualityMonitor` Submodule <a name="`dataDatabricksDataQualityMonitor` Submodule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityMonitor <a name="DataDatabricksDataQualityMonitor" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor databricks_data_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor(
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
  provider_config: DataDatabricksDataQualityMonitorProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#provider_config DataDatabricksDataQualityMonitor#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#provider_config DataDatabricksDataQualityMonitor#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#workspace_id DataDatabricksDataQualityMonitor#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDataQualityMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDataQualityMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDataQualityMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDataQualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfig">anomaly_detection_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfig">data_profiling_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference">DataDatabricksDataQualityMonitorProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `anomaly_detection_config`<sup>Required</sup> <a name="anomaly_detection_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfig"></a>

```python
anomaly_detection_config: DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference</a>

---

##### `data_profiling_config`<sup>Required</sup> <a name="data_profiling_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfig"></a>

```python
data_profiling_config: DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfig"></a>

```python
provider_config: DataDatabricksDataQualityMonitorProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference">DataDatabricksDataQualityMonitorProviderConfigOutputReference</a>

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksDataQualityMonitorProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityMonitorAnomalyDetectionConfig <a name="DataDatabricksDataQualityMonitorAnomalyDetectionConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig(
  excluded_table_full_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.property.excludedTableFullNames">excluded_table_full_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#excluded_table_full_names DataDatabricksDataQualityMonitor#excluded_table_full_names}. |

---

##### `excluded_table_full_names`<sup>Optional</sup> <a name="excluded_table_full_names" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.property.excludedTableFullNames"></a>

```python
excluded_table_full_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#excluded_table_full_names DataDatabricksDataQualityMonitor#excluded_table_full_names}.

---

### DataDatabricksDataQualityMonitorConfig <a name="DataDatabricksDataQualityMonitorConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str,
  provider_config: DataDatabricksDataQualityMonitorProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#provider_config DataDatabricksDataQualityMonitor#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksDataQualityMonitorProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#provider_config DataDatabricksDataQualityMonitor#provider_config}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfig <a name="DataDatabricksDataQualityMonitorDataProfilingConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig(
  output_schema_id: str,
  assets_dir: str = None,
  baseline_table_name: str = None,
  custom_metrics: IResolvable | typing.List[DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics] = None,
  inference_log: DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog = None,
  notification_settings: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings = None,
  schedule: DataDatabricksDataQualityMonitorDataProfilingConfigSchedule = None,
  skip_builtin_dashboard: bool | IResolvable = None,
  slicing_exprs: typing.List[str] = None,
  snapshot: DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot = None,
  time_series: DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.outputSchemaId">output_schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#output_schema_id DataDatabricksDataQualityMonitor#output_schema_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.assetsDir">assets_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#assets_dir DataDatabricksDataQualityMonitor#assets_dir}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#baseline_table_name DataDatabricksDataQualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.customMetrics">custom_metrics</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#custom_metrics DataDatabricksDataQualityMonitor#custom_metrics}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#inference_log DataDatabricksDataQualityMonitor#inference_log}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#notification_settings DataDatabricksDataQualityMonitor#notification_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#schedule DataDatabricksDataQualityMonitor#schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#skip_builtin_dashboard DataDatabricksDataQualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#slicing_exprs DataDatabricksDataQualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#snapshot DataDatabricksDataQualityMonitor#snapshot}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.timeSeries">time_series</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#time_series DataDatabricksDataQualityMonitor#time_series}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#warehouse_id DataDatabricksDataQualityMonitor#warehouse_id}. |

---

##### `output_schema_id`<sup>Required</sup> <a name="output_schema_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.outputSchemaId"></a>

```python
output_schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#output_schema_id DataDatabricksDataQualityMonitor#output_schema_id}.

---

##### `assets_dir`<sup>Optional</sup> <a name="assets_dir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#assets_dir DataDatabricksDataQualityMonitor#assets_dir}.

---

##### `baseline_table_name`<sup>Optional</sup> <a name="baseline_table_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#baseline_table_name DataDatabricksDataQualityMonitor#baseline_table_name}.

---

##### `custom_metrics`<sup>Optional</sup> <a name="custom_metrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.customMetrics"></a>

```python
custom_metrics: IResolvable | typing.List[DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#custom_metrics DataDatabricksDataQualityMonitor#custom_metrics}.

---

##### `inference_log`<sup>Optional</sup> <a name="inference_log" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.inferenceLog"></a>

```python
inference_log: DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#inference_log DataDatabricksDataQualityMonitor#inference_log}.

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.notificationSettings"></a>

```python
notification_settings: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#notification_settings DataDatabricksDataQualityMonitor#notification_settings}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.schedule"></a>

```python
schedule: DataDatabricksDataQualityMonitorDataProfilingConfigSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#schedule DataDatabricksDataQualityMonitor#schedule}.

---

##### `skip_builtin_dashboard`<sup>Optional</sup> <a name="skip_builtin_dashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#skip_builtin_dashboard DataDatabricksDataQualityMonitor#skip_builtin_dashboard}.

---

##### `slicing_exprs`<sup>Optional</sup> <a name="slicing_exprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#slicing_exprs DataDatabricksDataQualityMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.snapshot"></a>

```python
snapshot: DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#snapshot DataDatabricksDataQualityMonitor#snapshot}.

---

##### `time_series`<sup>Optional</sup> <a name="time_series" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.timeSeries"></a>

```python
time_series: DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#time_series DataDatabricksDataQualityMonitor#time_series}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#warehouse_id DataDatabricksDataQualityMonitor#warehouse_id}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics(
  definition: str,
  input_columns: typing.List[str],
  name: str,
  output_data_type: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#definition DataDatabricksDataQualityMonitor#definition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#input_columns DataDatabricksDataQualityMonitor#input_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#name DataDatabricksDataQualityMonitor#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType">output_data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#output_data_type DataDatabricksDataQualityMonitor#output_data_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#type DataDatabricksDataQualityMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.definition"></a>

```python
definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#definition DataDatabricksDataQualityMonitor#definition}.

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#input_columns DataDatabricksDataQualityMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#name DataDatabricksDataQualityMonitor#name}.

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#output_data_type DataDatabricksDataQualityMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#type DataDatabricksDataQualityMonitor#type}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog <a name="DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog(
  granularities: typing.List[str],
  model_id_column: str,
  prediction_column: str,
  problem_type: str,
  timestamp_column: str,
  label_column: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn">model_id_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn">prediction_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.problemType">problem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn">label_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

##### `model_id_column`<sup>Required</sup> <a name="model_id_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```python
model_id_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}.

---

##### `prediction_column`<sup>Required</sup> <a name="prediction_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```python
prediction_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}.

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}.

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

##### `label_column`<sup>Optional</sup> <a name="label_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn"></a>

```python
label_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings(
  on_failure: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure"></a>

```python
on_failure: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure(
  email_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}. |

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigSchedule <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSchedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule(
  quartz_cron_expression: str,
  timezone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}. |

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}.

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot()
```


### DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries <a name="DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries(
  granularities: typing.List[str],
  timestamp_column: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

### DataDatabricksDataQualityMonitorProviderConfig <a name="DataDatabricksDataQualityMonitorProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#workspace_id DataDatabricksDataQualityMonitor#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#workspace_id DataDatabricksDataQualityMonitor#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference <a name="DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames">reset_excluded_table_full_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_table_full_names` <a name="reset_excluded_table_full_names" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resetExcludedTableFullNames"></a>

```python
def reset_excluded_table_full_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput">excluded_table_full_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNames">excluded_table_full_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_table_full_names_input`<sup>Optional</sup> <a name="excluded_table_full_names_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNamesInput"></a>

```python
excluded_table_full_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_table_full_names`<sup>Required</sup> <a name="excluded_table_full_names" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.excludedTableFullNames"></a>

```python
excluded_table_full_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDataQualityMonitorAnomalyDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]

---


### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">input_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">output_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">output_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `input_columns_input`<sup>Optional</sup> <a name="input_columns_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```python
input_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_data_type_input`<sup>Optional</sup> <a name="output_data_type_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```python
output_data_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">reset_label_column</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label_column` <a name="reset_label_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```python
def reset_label_column() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">label_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">model_id_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">prediction_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">problem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">timestamp_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn">label_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">model_id_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">prediction_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType">problem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_column_input`<sup>Optional</sup> <a name="label_column_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```python
label_column_input: str
```

- *Type:* str

---

##### `model_id_column_input`<sup>Optional</sup> <a name="model_id_column_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```python
model_id_column_input: str
```

- *Type:* str

---

##### `prediction_column_input`<sup>Optional</sup> <a name="prediction_column_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```python
prediction_column_input: str
```

- *Type:* str

---

##### `problem_type_input`<sup>Optional</sup> <a name="problem_type_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```python
problem_type_input: str
```

- *Type:* str

---

##### `timestamp_column_input`<sup>Optional</sup> <a name="timestamp_column_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```python
timestamp_column_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_column`<sup>Required</sup> <a name="label_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```python
label_column: str
```

- *Type:* str

---

##### `model_id_column`<sup>Required</sup> <a name="model_id_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```python
model_id_column: str
```

- *Type:* str

---

##### `prediction_column`<sup>Required</sup> <a name="prediction_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```python
prediction_column: str
```

- *Type:* str

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  email_addresses: typing.List[str] = None
) -> None
```

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}.

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">on_failure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```python
on_failure: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```python
on_failure_input: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics">put_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog">put_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot">put_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries">put_time_series</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir">reset_assets_dir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName">reset_baseline_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics">reset_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog">reset_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings">reset_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">reset_skip_builtin_dashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs">reset_slicing_exprs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries">reset_time_series</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_metrics` <a name="put_custom_metrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics"></a>

```python
def put_custom_metrics(
  value: IResolvable | typing.List[DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]

---

##### `put_inference_log` <a name="put_inference_log" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog"></a>

```python
def put_inference_log(
  granularities: typing.List[str],
  model_id_column: str,
  prediction_column: str,
  problem_type: str,
  timestamp_column: str,
  label_column: str = None
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

###### `model_id_column`<sup>Required</sup> <a name="model_id_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.modelIdColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}.

---

###### `prediction_column`<sup>Required</sup> <a name="prediction_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.predictionColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}.

---

###### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.problemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}.

---

###### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.timestampColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

###### `label_column`<sup>Optional</sup> <a name="label_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.labelColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}.

---

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings"></a>

```python
def put_notification_settings(
  on_failure: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings.parameter.onFailure"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule"></a>

```python
def put_schedule(
  quartz_cron_expression: str,
  timezone_id: str
) -> None
```

###### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule.parameter.quartzCronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}.

---

###### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}.

---

##### `put_snapshot` <a name="put_snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot"></a>

```python
def put_snapshot() -> None
```

##### `put_time_series` <a name="put_time_series" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries"></a>

```python
def put_time_series(
  granularities: typing.List[str],
  timestamp_column: str
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

###### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries.parameter.timestampColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

##### `reset_assets_dir` <a name="reset_assets_dir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir"></a>

```python
def reset_assets_dir() -> None
```

##### `reset_baseline_table_name` <a name="reset_baseline_table_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```python
def reset_baseline_table_name() -> None
```

##### `reset_custom_metrics` <a name="reset_custom_metrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```python
def reset_custom_metrics() -> None
```

##### `reset_inference_log` <a name="reset_inference_log" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog"></a>

```python
def reset_inference_log() -> None
```

##### `reset_notification_settings` <a name="reset_notification_settings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```python
def reset_notification_settings() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_skip_builtin_dashboard` <a name="reset_skip_builtin_dashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```python
def reset_skip_builtin_dashboard() -> None
```

##### `reset_slicing_exprs` <a name="reset_slicing_exprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```python
def reset_slicing_exprs() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_time_series` <a name="reset_time_series" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries"></a>

```python
def reset_time_series() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics">custom_metrics</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName">drift_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId">effective_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">latest_monitor_failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName">monitored_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion">monitor_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName">profile_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries">time_series</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput">assets_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput">baseline_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput">custom_metrics_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput">inference_log_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput">notification_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput">output_schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">skip_builtin_dashboard_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput">slicing_exprs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput">snapshot_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput">time_series_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir">assets_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId">output_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_metrics`<sup>Required</sup> <a name="custom_metrics" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics"></a>

```python
custom_metrics: DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList</a>

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `drift_metrics_table_name`<sup>Required</sup> <a name="drift_metrics_table_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```python
drift_metrics_table_name: str
```

- *Type:* str

---

##### `effective_warehouse_id`<sup>Required</sup> <a name="effective_warehouse_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```python
effective_warehouse_id: str
```

- *Type:* str

---

##### `inference_log`<sup>Required</sup> <a name="inference_log" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog"></a>

```python
inference_log: DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a>

---

##### `latest_monitor_failure_message`<sup>Required</sup> <a name="latest_monitor_failure_message" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```python
latest_monitor_failure_message: str
```

- *Type:* str

---

##### `monitored_table_name`<sup>Required</sup> <a name="monitored_table_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```python
monitored_table_name: str
```

- *Type:* str

---

##### `monitor_version`<sup>Required</sup> <a name="monitor_version" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion"></a>

```python
monitor_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings"></a>

```python
notification_settings: DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `profile_metrics_table_name`<sup>Required</sup> <a name="profile_metrics_table_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```python
profile_metrics_table_name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.schedule"></a>

```python
schedule: DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshot"></a>

```python
snapshot: DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries"></a>

```python
time_series: DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `assets_dir_input`<sup>Optional</sup> <a name="assets_dir_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```python
assets_dir_input: str
```

- *Type:* str

---

##### `baseline_table_name_input`<sup>Optional</sup> <a name="baseline_table_name_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```python
baseline_table_name_input: str
```

- *Type:* str

---

##### `custom_metrics_input`<sup>Optional</sup> <a name="custom_metrics_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```python
custom_metrics_input: IResolvable | typing.List[DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>]

---

##### `inference_log_input`<sup>Optional</sup> <a name="inference_log_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```python
inference_log_input: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```python
notification_settings_input: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `output_schema_id_input`<sup>Optional</sup> <a name="output_schema_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```python
output_schema_id_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput"></a>

```python
schedule_input: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `skip_builtin_dashboard_input`<sup>Optional</sup> <a name="skip_builtin_dashboard_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```python
skip_builtin_dashboard_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `slicing_exprs_input`<sup>Optional</sup> <a name="slicing_exprs_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```python
slicing_exprs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput"></a>

```python
snapshot_input: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `time_series_input`<sup>Optional</sup> <a name="time_series_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```python
time_series_input: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

---

##### `baseline_table_name`<sup>Required</sup> <a name="baseline_table_name" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

---

##### `output_schema_id`<sup>Required</sup> <a name="output_schema_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```python
output_schema_id: str
```

- *Type:* str

---

##### `skip_builtin_dashboard`<sup>Required</sup> <a name="skip_builtin_dashboard" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `slicing_exprs`<sup>Required</sup> <a name="slicing_exprs" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDataQualityMonitorDataProfilingConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">quartz_cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_expression_input`<sup>Optional</sup> <a name="quartz_cron_expression_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```python
quartz_cron_expression_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">timestamp_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">timestamp_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_column_input`<sup>Optional</sup> <a name="timestamp_column_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```python
timestamp_column_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_column`<sup>Required</sup> <a name="timestamp_column" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```python
timestamp_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---


### DataDatabricksDataQualityMonitorProviderConfigOutputReference <a name="DataDatabricksDataQualityMonitorProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_data_quality_monitor

dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDataQualityMonitorProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorProviderConfig">DataDatabricksDataQualityMonitorProviderConfig</a>

---



